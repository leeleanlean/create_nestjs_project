import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as serveStatic from 'serve-static';
import { join } from 'path';

import CONFIG from './config'
import { HttpExceptionFilter } from './common/filters/exception.filter'
import { TransformInterceptor } from './common/interceptor/transform.interceptor';

async function bootstrap() {
  // Generate instance
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn']
  });

  // Static resource directory
  app.use('/public', serveStatic(join(__dirname, CONFIG.STATIC_FOLDER), {
    maxAge: CONFIG.STATIC_MAX_AGE,
    extensions: CONFIG.STATIC_EXTENSIONS
  }));

  // Exception filter
  app.useGlobalFilters(new HttpExceptionFilter());

  // Interceptor return result transform
  app.useGlobalInterceptors(new TransformInterceptor());

  // Default port
  await app.listen(CONFIG.SERVER_PORT);
}
bootstrap();
