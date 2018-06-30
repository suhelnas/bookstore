import {UserModel} from "../infrastructure/authentication/models/user.model";
import {FavoriteBookModel} from "../infrastructure/books/models/favorite.book.model";

export class DbConfig {
  static init(conn){
    new UserModel(conn);
    new FavoriteBookModel(conn);
  }
}
