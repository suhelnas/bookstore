import * as mongoose from 'mongoose';
export class UserModel {
  private static userModel = null;
  constructor(dbConn){
    let  UserSchema=  new mongoose.Schema({
      username: String,
      googleId: String,
      thumbnail: String
    });
    UserModel.userModel = dbConn.model('user',UserSchema)
  }
  static userClassModel(){
    return UserModel.userModel;
  }
}
