"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var http = require("http");
var mongoose = require("mongoose");
var routes_config_1 = require("./config/routes.config");
var db_config_1 = require("./config/db.config");
var passport_config_1 = require("./config/passport.config");
var index_1 = require("./routes/index");
var path = require("path");
require('dotenv').config();
var app = express();
global['dbConn'] = mongoose.createConnection(process.env.PRODUCTION);
if (global['dbConn']) {
    db_config_1.DbConfig.init(global['dbConn']);
    routes_config_1.RoutesConfig.init(app);
    index_1.Routes.init(app, express.Router());
    passport_config_1.PassportConfig.init();
    app.get('*', function (req, res) {
        var index = path.join(__dirname, 'build', 'index.html');
        res.sendFile(index);
    });
    http.createServer(app).listen(process.env.PORT || 8080, function () {
        console.log('starting server..');
    });
}
//# sourceMappingURL=server.js.map