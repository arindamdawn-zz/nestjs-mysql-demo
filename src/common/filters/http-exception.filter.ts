import {
  ExceptionFilter,
  ArgumentsHost,
  HttpException,
  Catch,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();
    const statusCode = exception.getStatus();

    return response.status(statusCode).json({
      statusCode: statusCode,
      timeStamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
