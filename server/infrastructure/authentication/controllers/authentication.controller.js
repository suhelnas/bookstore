"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var authentication_service_1 = require("../implementation/authentication.service");
var AuthenticationController = /** @class */ (function () {
    function AuthenticationController() {
    }
    AuthenticationController.userProfileData = function (req, res) {
        var authenticationService = new authentication_service_1.AuthenticationService();
        var promise = authenticationService.getUserDetail(req.session);
        promise = promise.then(function (data) {
            if (data)
                res.send(data);
        });
    };
    AuthenticationController.logout = function (req, res) {
        req.session.destroy(function (err) {
            if (err)
                throw new Error("Some problem occured");
            else {
                res.send({ Success: true,
                    Message: "System logout" });
            }
        });
    };
    return AuthenticationController;
}());
exports.AuthenticationController = AuthenticationController;
//# sourceMappingURL=authentication.controller.js.map