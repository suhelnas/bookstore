import {FavoriteBookModel} from "../models/favorite.book.model";

export interface IBooksSearchService {
  favoriteBookList(userId) :Promise<any>;
  updateFavoriteList(body,userId):Promise<any>;
}
export class BooksSearchService implements IBooksSearchService{
  favoriteBookList(userId):Promise<any>{
    let FavoriteBook = FavoriteBookModel.favoriteClassModel();
    let promise = FavoriteBook.findOne({userId:userId});
    promise = promise.then(function (data) {
      return data;
    })

    return promise;
  }

  updateFavoriteList(body,userId):Promise<any> {
    console.log(body);
    console.log(userId);
    let FavoriteBook = FavoriteBookModel.favoriteClassModel();
    if (body.isFavorite) {
      let promise = FavoriteBook.update({userId: userId}, {$push: {books: body.bookId}}, {upsert: true});
      promise = promise.then(function (data) {
        return data;
      }, function (error) {
        console.log(error);
      });
      return promise;
    }
    else {
      let promise = FavoriteBook.update({userId: userId}, {$pull: {books: body.bookId}}, {upsert: true});
      promise = promise.then(function (data) {
        return data;
      }, function (error) {
        console.log(error);
      });
      return promise;
    }
  }
}
