"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var UserModel = /** @class */ (function () {
    function UserModel(dbConn) {
        var UserSchema = new mongoose.Schema({
            username: String,
            googleId: String,
            thumbnail: String
        });
        UserModel.userModel = dbConn.model('user', UserSchema);
    }
    UserModel.userClassModel = function () {
        return UserModel.userModel;
    };
    UserModel.userModel = null;
    return UserModel;
}());
exports.UserModel = UserModel;
//# sourceMappingURL=user.model.js.map