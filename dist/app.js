"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = require("./routes");
var data_source_1 = require("./data-source");
var App = /** @class */ (function () {
    function App() {
        this.express = (0, express_1.default)();
        this.middleware();
        this.routes();
        this.database();
    }
    App.prototype.database = function () {
        data_source_1.AppDataSource.initialize()
            .then(function () { return console.log('Database connected'); })
            .catch(function (err) { return console.error('Database connection error: ', err); });
    };
    App.prototype.middleware = function () {
        this.express.use(express_1.default.json());
    };
    App.prototype.routes = function () {
        this.express.use(routes_1.routes);
    };
    return App;
}());
exports.default = new App().express;
//# sourceMappingURL=app.js.map