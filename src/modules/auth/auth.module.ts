import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { LoggerModule } from '../logger/logger.module';
import { LoggerService } from '../logger/logger.service';

@Module({
  imports: [
    PassportModule,
    UsersModule,
    JwtModule.register({
      secret: process.env.JWTKEY,
      signOptions: { expiresIn: process.env.TOKEN_EXPIRATION },
    })
  ],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
    LoggerService
  ],
  controllers: [AuthController],
})
export class AuthModule {}
