import {
  ArgumentsHost,
  Catch,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { MyLoggerService } from './my-logger/my-logger.service';
import {
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} from '@prisma/client/runtime/library';
import { Request, Response } from 'express';

type ResponseObjType = {
  statusCode: number;
  timestamp: string;
  path: string;
  response: string | object;
};

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
  private readonly logger = new MyLoggerService(AllExceptionsFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const responseObj: ResponseObjType = {
      statusCode: 500,
      timestamp: new Date().toISOString(),
      path: request.url,
      response: '',
    };

    if (exception instanceof HttpException) {
      (responseObj.statusCode = exception.getStatus()),
        (responseObj.response = exception.getResponse());
    } else if (exception instanceof PrismaClientValidationError) {
      responseObj.statusCode = 422;
      responseObj.response = exception.message.replaceAll('/\n/g', ' ');
    } else if (exception instanceof PrismaClientKnownRequestError) {
      const targets = exception.meta.target as string[];
      switch (exception.code) {
        case 'P2002':
          // Check the specific field that failed (e.g., email, nickname, id)
          if (targets.includes('email')) {
            responseObj.statusCode = HttpStatus.CONFLICT; // 409
            responseObj.response = '이메일이 이미 존재합니다.';
          } else if (targets.includes('nickname')) {
            responseObj.statusCode = HttpStatus.CONFLICT; // 409
            responseObj.response = '닉네임이 이미 존재합니다.';
          } else if (targets.includes('id')) {
            responseObj.statusCode = HttpStatus.CONFLICT; // 409
            responseObj.response = '아이디가 이미 존재합니다.';
          } else {
            responseObj.statusCode = HttpStatus.CONFLICT; // 409
            responseObj.response = '중복된 값이 존재합니다.';
          }
          break;
        case 'P2025': // Record not found
          responseObj.statusCode = HttpStatus.NOT_FOUND; // 404
          responseObj.response = '레코드를 찾을 수 없습니다.';
          break;
        case 'P2003': // Foreign key constraint failed
          responseObj.statusCode = HttpStatus.BAD_REQUEST; // 400
          responseObj.response = '외래 키 제약 조건 오류입니다.';
          break;
        default:
          responseObj.statusCode = HttpStatus.BAD_REQUEST; // 400
          responseObj.response = '프리즈마 클라이언트 오류가 발생했습니다.';
          break;
      }
    } else {
      responseObj.statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
      responseObj.response = 'Internal Server Error';
    }

    response.status(responseObj.statusCode).json(responseObj);

    this.logger.error(responseObj.response, AllExceptionsFilter.name);

    super.catch(exception, host);
  }
}
