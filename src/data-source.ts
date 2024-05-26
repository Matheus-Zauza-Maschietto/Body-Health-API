import { DataSource } from "typeorm";
import { User } from "./Models/user";
import { Categoria } from "./Models/categoria";
import { Tarefa } from "./Models/tarefa";
import { Status } from "./Models/status";

export const AppDataSource = new DataSource({
    type: "mssql",
    host: "sql-server",
    port: 1433,
    username: "sa",
    password: "Senha123!",
    database: "master",
    synchronize: true,
    logging: true,
    entities: [User, Categoria, Tarefa, Status],
    subscribers: [],
    migrations: [],
    extra: {
        autoLoadEntities: true,
        trustServerCertificate: true,
    }
})