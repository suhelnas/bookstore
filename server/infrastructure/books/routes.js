"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var books_search_controller_1 = require("./controllers/books.search.controller");
var routes_config_1 = require("../../config/routes.config");
var BookSearchRoutes = /** @class */ (function () {
    function BookSearchRoutes() {
    }
    BookSearchRoutes.init = function (router) {
        router.post('/api/favorite/book/update', routes_config_1.RoutesConfig.checkAuth, books_search_controller_1.BooksSearchController.updateFavorite);
        router.get('/api/favorites', routes_config_1.RoutesConfig.checkAuth, books_search_controller_1.BooksSearchController.getBooksByUserId);
    };
    return BookSearchRoutes;
}());
exports.BookSearchRoutes = BookSearchRoutes;
//# sourceMappingURL=routes.js.map