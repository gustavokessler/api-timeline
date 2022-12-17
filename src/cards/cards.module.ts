import { CardsController } from './cards.controller';
import { CardsProviders } from './cards.provider';
import { CardsService } from './cards.service';
import { DatabaseModule } from 'src/database/database.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [DatabaseModule],
  controllers: [CardsController],
  providers: [CardsService, ...CardsProviders]
})
export class CardsModule {}
