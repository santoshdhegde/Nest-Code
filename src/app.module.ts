import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import * as path from 'path';
import { ModuleLoaderModule } from './common/module-loader.module';

@Module({
  imports: [
    EventEmitterModule.forRoot({ wildcard: true }),
    /**
     * Load all entity unit modules from src folder
     */
    ModuleLoaderModule.register({
      name: 'entities',
      path: path.resolve(__dirname, './'),
      fileSpec: '**/*.module.js',
    }),
  ]
})
export class AppModule {}
