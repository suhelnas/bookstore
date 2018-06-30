"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_model_1 = require("../infrastructure/authentication/models/user.model");
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
require('dotenv').config();
var PassportConfig = /** @class */ (function () {
    function PassportConfig() {
    }
    PassportConfig.init = function () {
        var User = user_model_1.UserModel.userClassModel();
        passport.serializeUser(function (user, done) {
            done(null, user.id);
        });
        passport.deserializeUser(function (id, done) {
            User.findById(id).then(function (user) {
                done(null, user);
            });
        });
        passport.use(new GoogleStrategy({
            // options for google strategy
            callbackURL: 'http://localhost:4200/api/auth/google/callback',
            clientID: process.env.CLIENTID,
            clientSecret: process.env.CLIENTSECRET
        }, function (accessToken, refreshToken, profile, done) {
            // passport callback function
            console.log('passport callback function fired');
            //check if user already exists in our db
            var promise = User.findOne().where('googleId').equals(profile.id);
            promise.then(function (currentUser) {
                if (currentUser) {
                    // already have the user
                    console.log("user is ", currentUser);
                    done(null, currentUser);
                }
                else {
                    //if not create user in our db
                    new User({
                        username: profile.displayName,
                        googleId: profile.id,
                        thumbnail: profile._json.image.url
                    }).save().then(function (newUser) {
                        console.log('user is created ', newUser);
                        done(null, newUser);
                    });
                }
            });
        }, function (error) {
            console.log(error);
        }));
    };
    return PassportConfig;
}());
exports.PassportConfig = PassportConfig;
//# sourceMappingURL=passport.config.js.map