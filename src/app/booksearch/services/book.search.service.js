"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var BookSearchService = /** @class */ (function () {
    function BookSearchService(_http) {
        this._http = _http;
    }
    BookSearchService.prototype.getSearchResult = function (bookName) {
        var that = this;
        return new Promise(function (resolve, reject) {
            return that._http.get('https://www.googleapis.com/books/v1/volumes?q=' + bookName).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    BookSearchService.prototype.getBookInfo = function (url) {
        var that = this;
        return new Promise(function (resolve, reject) {
            return that._http.get(url).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    BookSearchService.prototype.getUserInfo = function () {
        var that = this;
        return new Promise(function (resolve, reject) {
            return that._http.get('/api/user/info').subscribe(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    BookSearchService.prototype.addFavorite = function (obj) {
        var that = this;
        return new Promise(function (resolve, reject) {
            return that._http.post('/api/favorite/book/update', obj).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    BookSearchService.prototype.getFavoriteBooks = function () {
        var that = this;
        return new Promise(function (resolve, reject) {
            return that._http.get('/api/favorites').subscribe(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    BookSearchService.prototype.logout = function () {
        var that = this;
        return new Promise(function (resolve, reject) {
            return that._http.get('/api/user/logout').subscribe(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    BookSearchService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], BookSearchService);
    return BookSearchService;
}());
exports.BookSearchService = BookSearchService;
//# sourceMappingURL=book.search.service.js.map