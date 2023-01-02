import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

export const ormConfigFactory: () => MysqlConnectionOptions = () => ({
  type: "mysql",
  host: "sql.freedb.tech",
  port: 3306,
  username: "freedb_api_user", // TODO DEPOIS MUDAR ISSO AQUI PARA O TIMELINE
  password: process.env.DATABASE_PASSWORD || "neshapass",
  database: "freedb_timeline",
  entities: ["dist/**/*.entity{.ts,.js}"],
  autoLoadEntities: true,
  isGenerated: true,
  generationStrategy: 'increment',
});