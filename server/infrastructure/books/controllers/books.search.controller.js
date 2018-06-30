"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var books_search_service_1 = require("../implementation/books.search.service");
var BooksSearchController = /** @class */ (function () {
    function BooksSearchController() {
    }
    BooksSearchController.getBooksByUserId = function (req, res) {
        var bookSearchService = new books_search_service_1.BooksSearchService();
        var promise = bookSearchService.favoriteBookList(req.session.userId);
        promise.then(function (data) {
            res.send(data);
        });
    };
    BooksSearchController.updateFavorite = function (req, res) {
        var bookSearchService = new books_search_service_1.BooksSearchService();
        var promise = bookSearchService.updateFavoriteList(req.body, req.session.userId);
        promise.then(function (data) {
            res.send(data);
        });
    };
    return BooksSearchController;
}());
exports.BooksSearchController = BooksSearchController;
//# sourceMappingURL=books.search.controller.js.map