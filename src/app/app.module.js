"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var http_1 = require("@angular/common/http");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var login_component_1 = require("./authentication/login.component");
var book_search_component_1 = require("./booksearch/book.search.component");
var authentication_service_1 = require("./authentication/services/authentication.service");
var book_search_service_1 = require("./booksearch/services/book.search.service");
var appRoutes = [{ path: 'login', component: login_component_1.LoginComponent },
    {
        path: 'book/search',
        component: book_search_component_1.BookSearchComponent,
        data: { title: 'Book Search' }
    },
    { path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }, { path: '**', redirectTo: '/login}', pathMatch: 'full' }];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent, login_component_1.LoginComponent, book_search_component_1.BookSearchComponent
            ],
            imports: [
                platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpClientModule, router_1.RouterModule.forRoot(appRoutes)
            ],
            providers: [authentication_service_1.AuthenticationService, book_search_service_1.BookSearchService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map