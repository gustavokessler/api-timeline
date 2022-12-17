import { Card } from './entities/card.entity';
import { Connection } from 'typeorm';
import { Provider } from "@nestjs/common";
import { constants } from "src/shared/constants/constants";

export const CardsProviders: Provider[] = [
  {
    provide: constants.CARDS_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(Card),
    inject: [constants.DATABASE_CONNECTION]
  }
]