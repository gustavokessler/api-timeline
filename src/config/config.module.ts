import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { ormConfigFactory } from 'src/environment/environment';

@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
      load: [() => ({ ormConfig: ormConfigFactory()})],
    }),
  ],
})
export class ConfigModule {}