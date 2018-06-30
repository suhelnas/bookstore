import * as express from 'express';
import * as http from 'http'
import * as mongoose from 'mongoose';
import {RoutesConfig} from './config/routes.config';
import {DbConfig} from "./config/db.config";
import {PassportConfig} from "./config/passport.config";
import {Routes} from './routes/index';
require('dotenv').config();


let app = express();
global['dbConn']= mongoose.createConnection(process.env.PRODUCTION);
if(global['dbConn']) {
  DbConfig.init(global['dbConn'])
  RoutesConfig.init(app);
  Routes.init(app, express.Router())
  PassportConfig.init();
  console.log("here");
  http.createServer(app).listen(process.env.PORT || 8080, function () {
    console.log('starting server..')
  })
}
