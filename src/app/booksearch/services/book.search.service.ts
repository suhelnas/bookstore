import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class BookSearchService {
  constructor(private _http: HttpClient){

  }
  getSearchResult(bookName){
    let that =this;
    return new Promise(function(resolve, reject){
      return that._http.get('https://www.googleapis.com/books/v1/volumes?q='+bookName).subscribe(function (data) {
        resolve(data);
      },function (error) {
        reject (error)
      })
    })
  }

  getBookInfo(url){
    let that =this;
    return new Promise(function(resolve, reject){
      return that._http.get(url).subscribe(function (data) {
        resolve(data);
      },function (error) {
        reject (error)
      })
    })
  }

  getUserInfo(){
    let that =this;
    return new Promise(function(resolve, reject){
      return that._http.get('/api/user/info').subscribe(function (data) {
        resolve(data);
      },function (error) {
        reject (error)
      })
    })
  }
  addFavorite(obj){
    let that =this;
    return new Promise(function(resolve, reject){
      return that._http.post('/api/favorite/book/update',obj).subscribe(function (data) {
        resolve(data);
      },function (error) {
        reject (error)
      })
    })
  }

  getFavoriteBooks(){
    let that =this;
    return new Promise(function(resolve, reject){
      return that._http.get('/api/favorites').subscribe(function (data) {
        resolve(data);
      },function (error) {
        reject (error)
      })
    })
  }

  logout(){
    let that =this;
    return new Promise(function(resolve, reject){
      return that._http.get('/api/user/logout').subscribe(function (data) {
        resolve(data);
      },function (error) {
        reject (error)
      })
    })
  }
}
