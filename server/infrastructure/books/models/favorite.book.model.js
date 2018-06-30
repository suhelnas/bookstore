"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var FavoriteBookModel = /** @class */ (function () {
    function FavoriteBookModel(dbConn) {
        var FavoriteBookSchema = new mongoose.Schema({
            books: [],
            userId: String
        });
        FavoriteBookModel.favoriteBookModel = dbConn.model('FavoriteBook', FavoriteBookSchema);
    }
    FavoriteBookModel.favoriteClassModel = function () {
        return FavoriteBookModel.favoriteBookModel;
    };
    FavoriteBookModel.favoriteBookModel = null;
    return FavoriteBookModel;
}());
exports.FavoriteBookModel = FavoriteBookModel;
//# sourceMappingURL=favorite.book.model.js.map