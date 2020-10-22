import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const errorCode = exception.getStatus()
    const message = exception.message;

    // Print error message
    Logger.error(`${request.originalUrl} ${message}`);

    // Organizing error message
    const errorResponse = {
      error: {
        url: request.originalUrl,
        code: errorCode,
        msg: message
    	},
      retMsg: 'error',
      retCode: '999999'
    };
    const status = exception instanceof HttpException
      ? exception.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR;

    // Set the returned status/headers/error message
    response.status(status);
    response.header('Content-Type', 'application/json; charset=utf-8');
    response.send(errorResponse);
  }
}
