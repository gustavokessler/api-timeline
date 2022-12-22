import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

export const ormConfigFactory: () => MysqlConnectionOptions = () => ({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root", // TODO DEPOIS MUDAR ISSO AQUI PARA O TIMELINE
  password: "neshapass",
  database: "timeline",
  entities: ["dist/**/*.entity{.ts,.js}"],
  autoLoadEntities: true,
  isGenerated: true,
  generationStrategy: 'increment',
});