import {UserModel} from "../infrastructure/authentication/models/user.model";

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
require('dotenv').config();

export class PassportConfig{

  static init(){
    let  User = UserModel.userClassModel();
    passport.serializeUser((user, done) => {
      done(null, user.id)
    });

    passport.deserializeUser((id, done) => {
      User.findById(id).then((user) => {
        done(null, user);
      });
    });

    passport.use(
      new GoogleStrategy({
        // options for google strategy
        callbackURL: 'http://localhost:4200/api/auth/google/callback',
        clientID: process.env.CLIENTID,
        clientSecret: process.env.CLIENTSECRET
      }, (accessToken, refreshToken, profile, done) => {
        // passport callback function
        console.log('passport callback function fired');
        //check if user already exists in our db
        let promise = User.findOne().where('googleId').equals(profile.id);
        promise.then((currentUser) => {
          if(currentUser){
            // already have the user
            console.log("user is ", currentUser);
            done(null, currentUser);
          } else{
            //if not create user in our db
            new User({
              username: profile.displayName,
              googleId: profile.id,
              thumbnail: profile._json.image.url
            }).save().then((newUser) => {
              console.log('user is created ', newUser);
              done(null, newUser);
            });
          }
        });


      },(error) => {
        console.log(error);
      })
    );
  }
}

