"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_model_1 = require("../models/user.model");
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService() {
    }
    AuthenticationService.prototype.getUserDetail = function (sessionDetails) {
        var User = user_model_1.UserModel.userClassModel();
        var promise = User.findOne({ _id: sessionDetails.userId });
        promise = promise.then(function (data) {
            return data;
        });
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
    };
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map