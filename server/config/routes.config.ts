import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as passport from 'passport';
import * as session from 'express-session'
require('dotenv').config();

export class RoutesConfig {
  static init(application:express.Application){
    let clientfiles = '/app/dist/'
    application.use(express.static(clientfiles));
    application.use(bodyParser.urlencoded({ extended: false, limit: 10000000 }));
    application.use(bodyParser.json({ limit: '1000mb' }));
    application.use(passport.initialize());
    application.use(session({secret:process.env.SECRET_KEY,resave: false,
      saveUninitialized: true,
      cookie: { secure: false } }));
  }

 static checkAuth(req, res, next) {
    if (!req.session.userId) {
      console.log("here");
      res.redirect('/login')
    } else {
      next();
    }
  }

}
