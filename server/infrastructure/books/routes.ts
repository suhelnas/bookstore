import * as express from 'express'
import {BooksSearchController} from "./controllers/books.search.controller";
import {RoutesConfig} from "../../config/routes.config";
export class BookSearchRoutes{
  static init(router: express.Router){
    router.post('/api/favorite/book/update',RoutesConfig.checkAuth,BooksSearchController.updateFavorite)
    router.get('/api/favorites',RoutesConfig.checkAuth,BooksSearchController.getBooksByUserId)

  }
}
