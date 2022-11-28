import { Connection } from 'typeorm';
import { Professor } from 'src/professor/professor.entity';
import { Provider } from "@nestjs/common";
import { constants } from "src/shared/constants/constants";

export const AuthProviders: Provider[] = [
  {
    provide: constants.PROFESSOR_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(Professor),
    inject: [constants.DATABASE_CONNECTION]
  }
]