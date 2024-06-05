import { DataSource } from "typeorm";
import { User } from "./Models/user";
import { Session } from "./Models/session";

export const AppDataSource = new DataSource({
    type: "mssql",
    //host: "sql-server",
    host: "localhost",
    port: 1433,
    username: "sa",
    password: "Senha123!",
    database: "master",
    synchronize: true,
    logging: true,
    entities: [User, Session],
    subscribers: [],
    migrations: [],
    extra: {
        autoLoadEntities: true,
        trustServerCertificate: true,
    }
})