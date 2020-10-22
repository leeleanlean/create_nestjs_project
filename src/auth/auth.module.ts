import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

import CONFIG from '../config';

import { UserService } from '../user/index.service';
import { UserEntity } from '../user/index.entity'

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    PassportModule,
    JwtModule.register({
      secret: CONFIG.AUTH_SECRET,
      signOptions: { expiresIn: CONFIG.AUTH_EXPIRES },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    UserService,
    LocalStrategy,
    JwtStrategy
  ],
  exports: [AuthService],
})
export class AuthModule {}
