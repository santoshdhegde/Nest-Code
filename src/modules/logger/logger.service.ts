import { Injectable } from '@nestjs/common';
import { config, createLogger, format, transports } from 'winston';
const newrelicFormatter = require('@newrelic/winston-enricher');
import winston = require('winston');
const newrelicWinstonFormatter = newrelicFormatter(winston);

const rTracer = require('cls-rtracer');
const { printf } = format;
const os = require('os');
const _has = require('lodash/has');
// const customConfig = require('../../config/config');
const { levels } = config.npm;

const level = "info";
const minLevel = _has(levels, level) ? level : 'error';
// const environment = process.env.NODE_ENV !== null ? process.env.NODE_ENV : customConfig.app.environment;

const messageTemplate = () => printf(({
    level,
    message,
    timestamp
}) => {
    const segments = [
        '[API]',
        level,
        message
    ];
    segments.unshift(timestamp);
    return segments.join(' ');
});

const formatOptions = [
    format.timestamp(),
    format.splat(),
    // format.simple(),
    format.colorize(),
    format.simple(),
    format.errors({ stack: true }),
    newrelicWinstonFormatter()
];

formatOptions.push(format.timestamp({ format: 'default' }));
formatOptions.push(messageTemplate());

const winlogger = createLogger({
    format: format.combine(...formatOptions),
    level: minLevel,
    transports: [
        new (transports.Console)({})
    ],
    exceptionHandlers: [
        new (transports.Console)({})
    ],
    exitOnError: false
});


@Injectable()
export class LoggerService {
    constructor() {}
    /**
     * 
     * @param level 
     * @param moduleName 
     * @param methodName 
     * @param message 
     * @param error 
     */
    public async logger(level: string, moduleName: any, methodName: any, message: any, error?: any) {
        level = escape(level).toLowerCase();
        let request_id = "NA";
        let custom_amz_trace_id = "NA";
        if(rTracer.id() && rTracer.id().split('|').length > 1){        
            request_id = rTracer.id().split('|')[0].split(":")[1];
            request_id = request_id ? request_id : "NA";
            custom_amz_trace_id = rTracer.id().split('|')[1].split(":")[1];
            custom_amz_trace_id = custom_amz_trace_id ? custom_amz_trace_id : "NA";
        }
        if (level === 'info') {
            winlogger.log('info','%s/%s: %s', `${os.hostname}: ${request_id} ${custom_amz_trace_id} ${moduleName}`, methodName, message);
        } else if (level === 'debug') {
            winlogger.log('debug','%s/%s: %s', `${os.hostname}: ${request_id} ${custom_amz_trace_id} ${moduleName}`, methodName, message);
        } else if (level === 'error') {
            winlogger.log('error','%s/%s: %s: %s', `${os.hostname}: ${request_id} ${custom_amz_trace_id} ${moduleName}`, methodName, message, error);
        }
    }
}
