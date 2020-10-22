// @nestjs
import {
  Module,
  NestModule,
  MiddlewareConsumer
} from '@nestjs/common';

// @nestjs/typeorm
import { TypeOrmModule } from '@nestjs/typeorm';

// Config
import CONFIG from './config'

// Middleware
import { LoggerMiddleware } from './common/middleware/logger.middleware';

// Module
import { AppController } from './app.controller';
import { TestModule } from './test/index.module';
import { AuthModule } from './auth/auth.module';
import { UploadModule } from './upload/index.module';
import { UserModule } from './user/index.module';

// Entity
import { UserEntity } from './user/index.entity'

const Entity = [ UserEntity ]

@Module({
  imports: [
    TestModule,
    AuthModule,
    UserModule,
    UploadModule,

    // TypeOrmModule
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: CONFIG.DATABASE_HOST,
      port: CONFIG.DATABASE_PORT,
      username: CONFIG.DATABASE_USERNAME,
      password: CONFIG.DATABASE_PASSWORD,
      database: CONFIG.DATABASE_DATABASE,
      entities: CONFIG.DATABASE_ENTITIES,
      synchronize: CONFIG.DATABASE_SYNCHRONIZE
    }),
    TypeOrmModule.forFeature([...Entity])
  ],
  controllers: [AppController]
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(
      'test',
      'auth',
      'user',
      'upload'
    );
  }
}
