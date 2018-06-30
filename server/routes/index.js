"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routes_1 = require("../infrastructure/authentication/routes");
var routes_2 = require("../infrastructure/books/routes");
var Routes = /** @class */ (function () {
    function Routes() {
    }
    Routes.init = function (app, router) {
        routes_1.AuthenticationRoutes.init(router);
        routes_2.BookSearchRoutes.init(router);
        app.use('/', router);
    };
    return Routes;
}());
exports.Routes = Routes;
//# sourceMappingURL=index.js.map