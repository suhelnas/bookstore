import {UserModel} from "../models/user.model";

export interface IAuthenticationService{
  getUserDetail(session):Promise<any>;
}
export class AuthenticationService implements IAuthenticationService{
  getUserDetail(sessionDetails):Promise<any>{

    let User = UserModel.userClassModel();
    let promise = User.findOne({_id:sessionDetails.userId});
    promise = promise.then(function (data) {
      return data;
    })
    return promise;
    // return new Promise(function(resolve, reject) {
    //   console.log(sessionDetails)
    //   if(sessionDetails){
    //     resolve({userId:sessionDetails.userId,
    //              googleId:sessionDetails.googleId} )
    //   }
    //   else {
    //     reject("details not found");
    //   }
    // })
  }
}
