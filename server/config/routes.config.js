"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var passport = require("passport");
var session = require("express-session");
require('dotenv').config();
var RoutesConfig = /** @class */ (function () {
    function RoutesConfig() {
    }
    RoutesConfig.init = function (application) {
        var clientfiles = '/app/dist/';
        application.use(express.static(clientfiles));
        application.use(bodyParser.urlencoded({ extended: false, limit: 10000000 }));
        application.use(bodyParser.json({ limit: '1000mb' }));
        application.use(passport.initialize());
        application.use(session({ secret: process.env.SECRET_KEY, resave: false,
            saveUninitialized: true,
            cookie: { secure: false } }));
    };
    RoutesConfig.checkAuth = function (req, res, next) {
        if (!req.session.userId) {
            console.log("here");
            res.redirect('/login');
        }
        else {
            next();
        }
    };
    return RoutesConfig;
}());
exports.RoutesConfig = RoutesConfig;
//# sourceMappingURL=routes.config.js.map