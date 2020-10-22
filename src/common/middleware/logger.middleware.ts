import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const { method, originalUrl, ip } = req
    const logFormat = `Time: ${new Date().toLocaleString()} Method: ${method} Request original url: ${originalUrl} IP: ${ip}`;

    console.log(logFormat);

    next()
  }
}
