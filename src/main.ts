import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);  
  
  app.enableCors();
  
  await app.listen(3003);


}
bootstrap();
