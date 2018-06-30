"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var passport = require("passport");
var authentication_controller_1 = require("./controllers/authentication.controller");
var routes_config_1 = require("../../config/routes.config");
var AuthenticationRoutes = /** @class */ (function () {
    function AuthenticationRoutes() {
    }
    AuthenticationRoutes.init = function (router) {
        router.get('/api/auth/google/callback', passport.authenticate('google', {
            failureRedirect: '/login'
        }), function (req, res) {
            req.session.userId = req.user._id;
            req.session.googleId = req.user.googleId;
            console.log("success");
            console.log(req.user);
            console.log(res.user);
            res.redirect('/book/search');
        });
        router.get('/api/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
        router.get('/api/user/info', routes_config_1.RoutesConfig.checkAuth, authentication_controller_1.AuthenticationController.userProfileData);
        router.get('/api/user/logout', routes_config_1.RoutesConfig.checkAuth, authentication_controller_1.AuthenticationController.logout);
    };
    return AuthenticationRoutes;
}());
exports.AuthenticationRoutes = AuthenticationRoutes;
//# sourceMappingURL=routes.js.map