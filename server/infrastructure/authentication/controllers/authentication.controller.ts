import {AuthenticationService, IAuthenticationService} from "../implementation/authentication.service";

export class AuthenticationController {
  static  userProfileData(req,res){
    let authenticationService:IAuthenticationService = new AuthenticationService();
    let promise = authenticationService.getUserDetail(req.session);
    promise = promise.then(function (data) {
      if(data)
      res.send(data);
    })
  }
  static logout(req,res){
    req.session.destroy(function (err) {
      if(err) throw new Error("Some problem occured")
      else {
        res.send({Success:true,
          Message:"System logout"});
      }
    })
  }
}
