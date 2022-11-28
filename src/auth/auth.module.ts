import { AuthController } from './auth.controller';
import { AuthProviders } from './auth.providers';
import { AuthService } from './auth.service';
import { DatabaseModule } from 'src/database/database.module';
import { Module } from '@nestjs/common';

@Module({
  imports:[ DatabaseModule],
  controllers: [AuthController],
  providers: [AuthService, ...AuthProviders],
})
export class AuthModule {}