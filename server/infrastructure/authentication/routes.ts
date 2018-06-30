import * as express from 'express'
import * as passport from 'passport';
import {AuthenticationController} from "./controllers/authentication.controller";
import {RoutesConfig} from "../../config/routes.config";

export class  AuthenticationRoutes{
  static init(router: express.Router) {
    router.get('/api/auth/google/callback',
      passport.authenticate('google', {
        failureRedirect: '/login'
      }),function (req,res) {
      req.session.userId = req.user._id;
      req.session.googleId = req.user.googleId;
      console.log("success");
         console.log(req.user);
         console.log(res.user);
        res.redirect('/book/search')
      });
    router.get('/api/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
    router.get('/api/user/info',RoutesConfig.checkAuth,AuthenticationController.userProfileData);
    router.get('/api/user/logout',RoutesConfig.checkAuth,AuthenticationController.logout)
  }




}
