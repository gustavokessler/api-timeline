import { Connection } from 'typeorm';
import { Game } from './entities/game.entity';
import { Provider } from "@nestjs/common";
import { constants } from "src/shared/constants/constants";

export const GameProviders: Provider[] = [
  {
    provide: constants.GAME_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(Game),
    inject: [constants.DATABASE_CONNECTION]
  }
]