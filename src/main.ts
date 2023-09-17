import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);  
  
  app.enableCors();

  await app.listen(process.env.SERVER_PORT || 3003);


}
bootstrap();
