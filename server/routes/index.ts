import * as express from 'express';
import {AuthenticationRoutes} from "../infrastructure/authentication/routes";
import {BookSearchRoutes} from "../infrastructure/books/routes";
export class Routes {
  static init(app:express.Application ,router:any){
    AuthenticationRoutes.init(router);
    BookSearchRoutes.init(router);
    app.use('/', router);
  }
}
