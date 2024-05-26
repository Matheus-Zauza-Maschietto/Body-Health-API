"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
function main() {
    app_1.default.listen(3000, 'localhost', function () {
        console.log('Server running at port 3000');
    });
}
main();
//# sourceMappingURL=server.js.map