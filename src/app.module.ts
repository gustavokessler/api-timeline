/* eslint-disable prettier/prettier */
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CartasModule } from './cartas/cartas.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [AuthModule, CartasModule,
    TypeOrmModule.forRoot({
      "type": "mysql",
      "host": "localhost",
      "port": 3306,
      "username": "root", // TODO DEPOIS MUDAR ISSO AQUI PARA O TIMELINE
      "password": "neshapass",
      "database": "timeline",
      // "entities": ["dist/**/*.entity{.ts,.js}"],
      "synchronize": true,
      "autoLoadEntities": true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
