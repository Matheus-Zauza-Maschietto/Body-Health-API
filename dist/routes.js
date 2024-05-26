"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var express_1 = require("express");
var testController_1 = __importDefault(require("./Controllers/testController"));
var userController_1 = __importDefault(require("./Controllers/userController"));
var routes = (0, express_1.Router)();
exports.routes = routes;
routes.get("/health-check", testController_1.default.healthCheck);
routes.post("/users", userController_1.default.createUser);
routes.post("/login", userController_1.default.loginUser);
//# sourceMappingURL=routes.js.map