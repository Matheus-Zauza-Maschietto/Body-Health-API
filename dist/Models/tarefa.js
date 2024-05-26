"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tarefa = void 0;
var typeorm_1 = require("typeorm");
var user_1 = require("./user");
var categoria_1 = require("./categoria");
var status_1 = require("./status");
var tipo_1 = require("./tipo");
var Tarefa = /** @class */ (function () {
    function Tarefa() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Tarefa.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Tarefa.prototype, "titulo", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Tarefa.prototype, "descricao", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Date)
    ], Tarefa.prototype, "dataCriacao", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Date)
    ], Tarefa.prototype, "dataConclusao", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return user_1.User; }),
        (0, typeorm_1.JoinColumn)(),
        __metadata("design:type", user_1.User)
    ], Tarefa.prototype, "responsavel", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return categoria_1.Categoria; }),
        (0, typeorm_1.JoinColumn)(),
        __metadata("design:type", categoria_1.Categoria)
    ], Tarefa.prototype, "categoria", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return status_1.Status; }),
        (0, typeorm_1.JoinColumn)(),
        __metadata("design:type", status_1.Status)
    ], Tarefa.prototype, "status", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return tipo_1.Tipo; }),
        (0, typeorm_1.JoinColumn)(),
        __metadata("design:type", tipo_1.Tipo)
    ], Tarefa.prototype, "tipo", void 0);
    Tarefa = __decorate([
        (0, typeorm_1.Entity)()
    ], Tarefa);
    return Tarefa;
}());
exports.Tarefa = Tarefa;
//# sourceMappingURL=tarefa.js.map