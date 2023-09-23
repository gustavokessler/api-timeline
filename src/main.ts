/* eslint-disable prettier/prettier */

import * as cookieParser from "cookie-parser";

import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use(cookieParser());
  

  app.set('trust proxy', 1);

  app.enableCors(
    {
      origin: new RegExp(process.env.CORS_ORIGIN_REGEX),
      credentials: true,
    }
  );

  await app.listen(process.env.SERVER_PORT || 3003);


}
bootstrap();
