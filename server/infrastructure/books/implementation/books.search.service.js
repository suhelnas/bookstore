"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var favorite_book_model_1 = require("../models/favorite.book.model");
var BooksSearchService = /** @class */ (function () {
    function BooksSearchService() {
    }
    BooksSearchService.prototype.favoriteBookList = function (userId) {
        var FavoriteBook = favorite_book_model_1.FavoriteBookModel.favoriteClassModel();
        var promise = FavoriteBook.findOne({ userId: userId });
        promise = promise.then(function (data) {
            return data;
        });
        return promise;
    };
    BooksSearchService.prototype.updateFavoriteList = function (body, userId) {
        console.log(body);
        console.log(userId);
        var FavoriteBook = favorite_book_model_1.FavoriteBookModel.favoriteClassModel();
        if (body.isFavorite) {
            var promise = FavoriteBook.update({ userId: userId }, { $push: { books: body.bookId } }, { upsert: true });
            promise = promise.then(function (data) {
                return data;
            }, function (error) {
                console.log(error);
            });
            return promise;
        }
        else {
            var promise = FavoriteBook.update({ userId: userId }, { $pull: { books: body.bookId } }, { upsert: true });
            promise = promise.then(function (data) {
                return data;
            }, function (error) {
                console.log(error);
            });
            return promise;
        }
    };
    return BooksSearchService;
}());
exports.BooksSearchService = BooksSearchService;
//# sourceMappingURL=books.search.service.js.map