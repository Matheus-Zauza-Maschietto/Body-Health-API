"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginDto = void 0;
var LoginDto = /** @class */ (function () {
    function LoginDto(user, mensagem) {
        this.email = user.email;
        this.token = user.token;
        this.tokenExpiracao = user.tokenExpiracao;
        this.mensagem = mensagem;
    }
    return LoginDto;
}());
exports.LoginDto = LoginDto;
//# sourceMappingURL=loginDto.js.map