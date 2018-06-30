import {BooksSearchService, IBooksSearchService} from "../implementation/books.search.service";

export class BooksSearchController {
  static getBooksByUserId(req,res){
    let bookSearchService:IBooksSearchService = new BooksSearchService();
    let promise = bookSearchService.favoriteBookList(req.session.userId);
    promise.then(function (data) {
      res.send(data);
    })
  }
  static updateFavorite(req,res){
    let bookSearchService:IBooksSearchService = new BooksSearchService();
    let promise = bookSearchService.updateFavoriteList(req.body,req.session.userId)
    promise.then(function (data) {
      res.send(data);
    })
  }
}
