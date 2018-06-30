import * as mongoose from 'mongoose';
export class FavoriteBookModel{
  private static favoriteBookModel = null;
  constructor(dbConn){
    let  FavoriteBookSchema=  new mongoose.Schema({
      books: [],
      userId: String
    });
    FavoriteBookModel.favoriteBookModel = dbConn.model('FavoriteBook',FavoriteBookSchema)
  }
  static favoriteClassModel(){
    return FavoriteBookModel.favoriteBookModel;
  }
}
