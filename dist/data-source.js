"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
var typeorm_1 = require("typeorm");
var user_1 = require("./Models/user");
var categoria_1 = require("./Models/categoria");
var tarefa_1 = require("./Models/tarefa");
var status_1 = require("./Models/status");
var tipo_1 = require("./Models/tipo");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mssql",
    host: "localhost",
    port: 1433,
    username: "sa",
    password: "Senha123@",
    database: "PROJETO_BUSSOLA",
    synchronize: true,
    logging: true,
    entities: [user_1.User, categoria_1.Categoria, tarefa_1.Tarefa, status_1.Status, tipo_1.Tipo],
    subscribers: [],
    migrations: [],
    extra: {
        autoLoadEntities: true,
        trustServerCertificate: true,
    }
});
//# sourceMappingURL=data-source.js.map