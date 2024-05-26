"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
var data_source_1 = require("../data-source");
var user_1 = require("../Models/user");
var UserRepository = /** @class */ (function () {
    function UserRepository() {
        this.userDataSource = data_source_1.AppDataSource.getRepository(user_1.User);
    }
    UserRepository.prototype.createUser = function (newUser) {
        return this.userDataSource.save(newUser);
    };
    UserRepository.prototype.getUserByEmailAndPassword = function (user) {
        return this.userDataSource.findOneBy({
            email: user.email,
            senha: user.senha
        });
    };
    UserRepository.prototype.getUserByEmail = function (user) {
        return this.userDataSource.findOneBy({
            email: user.email,
        });
    };
    UserRepository.prototype.loginUser = function (user) {
        return this.userDataSource.save(user);
    };
    return UserRepository;
}());
exports.UserRepository = UserRepository;
exports.default = new UserRepository();
//# sourceMappingURL=userRepository.js.map