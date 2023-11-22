// module.exports = {
export const logObj = {
  app: {
    port: '6060',
    name: '',
    logLevel: 'error',
    environment: 'development'
  },
  swagger: {
    info: {
      title: 'Documentation',
      version: '1.0.0',
      description: ''
    }
  },
  log: {
    logDirectory: './log/app.log.%DATE%',
    logFile: 'app.log.%DATE%',
    logFileCount: 5,
    logFileMaxSize: '5m',
    errorLogFile: 'error.log.%DATE%',
    errorLogFileCount: 15,
    errorLogFileMaxSize: '10m',
    errorData: {
      logLevel: 'error',
      moduleName: null,
      methodName: null,
      message: null,
      error: null,
      requestId: null,
      printLogMessage: true,
      errorLogAlertString: '{errorLogAlertString}',
      errorResponseStatusCode: '{errorResponseStatusCode}',
      errorResponseDetail: '{errorResponseDetail}'
    }
  },

  constants: {
    USER_EVENTS: 'messages',
    APPLICATION_ERROR_STATUS_CODE: 400,
    FORBIDDEN_ERROR_STATUS_CODE: 403,
    FORBIDDEN_ERROR_MESSAGE: 'Access to this user is forbidden',
    USER_STATUS_ERROR_STATUS_CODE: 403,
    USER_STATUS_ERROR_MESSAGE: 'Access to this user is forbidden - User account is either suspended or closed',
    CATCH_ERROR_STATUS_CODE: 500,
    CATCH_ERROR_DETAILS_STRING: 'Internal Server Error !!!',
    CATCH_ALERT_ERROR_STRING: 'alert_error',
    DB_DATA_VALIDATION_ALERT_ERROR_STRING: '',
    DB_DATA_VALIDATION_ERROR_STATUS_CODE: 404,
    DB_DATA_VALIDATION_LOG_LEVEL: 'info', // where the data is present in db or not -  like user exists or no
    DEFAULT_LOG_MESSAGE_CONTROLLER_ENTERED: 'Entered Controller',
    DEFAULT_LOG_MESSAGE_CONTROLLER_EXISTED: 'Exited Controller',
    DEFAULT_LOG_MESSAGE_SERVICE_ENTERED: 'Entered Service',
    DEFAULT_LOG_MESSAGE_SERVICE_EXISTED: 'Exited Service'
  },
  firebase: {
    enbledPushNotification: false,
    fcmToken:
      'f_9FcIX6HvI:APA91bEVtKDHOEu2Ej81yUXzpRa80PVw1r9AGlM86hMq7oUewej7-ccFKTZtIeJKIspeXFAW-AOs3qNg748CaUIKFMmXxZ5v61MD7sgpHunFiiW3JqBUBcGT8yP_3MU4D995hylbkLhg'
  },
  graphdbRelationshipEndPoints: {
    CREATE_RELATIONSHIP: 'graph/create/relationship',
    UPDATE_RELATIONSHIP: 'users/updaterelationship',
    DELETE_RELATIONSHIP: 'users/deleterelationship',
    GET_RELATIONSHIP: 'graph/list/relationship'
  },
  eventPreferences: {
    core: {
      singleDonation: {
        success: {
          inApp: true,
          push: true,
          relationDB: true,
          auditDb: true
        }
      }
    }
  },
  synchronousAllowableIterations: 3
};

logObj.log.errorData.logLevel = logObj.app.logLevel;
logObj.log.errorData.errorLogAlertString = logObj.constants.CATCH_ALERT_ERROR_STRING;
logObj.log.errorData.errorResponseStatusCode = logObj.constants.CATCH_ERROR_STATUS_CODE.toString();
logObj.log.errorData.errorResponseDetail = logObj.constants.CATCH_ERROR_DETAILS_STRING;


