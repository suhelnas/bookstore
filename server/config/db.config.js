"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_model_1 = require("../infrastructure/authentication/models/user.model");
var favorite_book_model_1 = require("../infrastructure/books/models/favorite.book.model");
var DbConfig = /** @class */ (function () {
    function DbConfig() {
    }
    DbConfig.init = function (conn) {
        new user_model_1.UserModel(conn);
        new favorite_book_model_1.FavoriteBookModel(conn);
    };
    return DbConfig;
}());
exports.DbConfig = DbConfig;
//# sourceMappingURL=db.config.js.map