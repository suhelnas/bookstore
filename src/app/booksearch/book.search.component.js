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
var router_1 = require("@angular/router");
var book_search_service_1 = require("./services/book.search.service");
var BookSearchComponent = /** @class */ (function () {
    function BookSearchComponent(_router, _bookSearch) {
        this._router = _router;
        this._bookSearch = _bookSearch;
        this.bookArray = [];
    }
    BookSearchComponent.prototype.ngOnInit = function () {
        var that = this;
        var promise = this._bookSearch.getUserInfo();
        promise.then(function (data) {
            that.userInfo = data;
            console.log(that.userInfo);
            localStorage.setItem('userId', data['_id']);
        });
    };
    BookSearchComponent.prototype.search = function () {
        var that = this;
        var promise = this._bookSearch.getSearchResult(this.bookName);
        promise.then(function (data) {
            var promise = that._bookSearch.getFavoriteBooks();
            promise.then(function (favorite) {
                console.log(favorite);
                console.log(data);
                var dataValues = data['items'];
                if (favorite && favorite['books'].length > 0) {
                    var books_1 = favorite['books'];
                    dataValues.forEach(function (item1, index) {
                        books_1.forEach(function (item2) {
                            if (item1.id == item2) {
                                console.log("here");
                                dataValues[index]['isFavorite'] = true;
                            }
                        });
                        if (!dataValues[index].isFavorite) {
                            dataValues[index].isFavorite = false;
                        }
                    });
                }
                that.bookArray = dataValues;
                console.log(that.bookArray);
            });
        });
    };
    BookSearchComponent.prototype.showDetails = function (url) {
        console.log(url);
        this._router.navigate(['book/information'], { queryParams: { link: url } });
    };
    BookSearchComponent.prototype.addFavorite = function (bookId, isFavorite) {
        console.log(isFavorite);
        var obj = {
            bookId: bookId,
            isFavorite: !isFavorite
        };
        var promise = this._bookSearch.addFavorite(obj);
        promise.then(function (data) {
            console.log(data);
        });
    };
    BookSearchComponent.prototype.logout = function () {
        var that = this;
        var promise = that._bookSearch.logout();
        promise.then(function (data) {
            if (data) {
                localStorage.clear();
                that._router.navigate(['/login']);
            }
        });
    };
    BookSearchComponent = __decorate([
        core_1.Component({
            selector: 'book-search',
            templateUrl: './book.search.component.html',
            styleUrls: ['./book.search.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router, book_search_service_1.BookSearchService])
    ], BookSearchComponent);
    return BookSearchComponent;
}());
exports.BookSearchComponent = BookSearchComponent;
//# sourceMappingURL=book.search.component.js.map