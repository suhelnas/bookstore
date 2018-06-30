import {Component} from "@angular/core";
import {Router} from '@angular/router';
import {BookSearchService} from "./services/book.search.service";

@Component({
  selector: 'book-search',
  templateUrl: './book.search.component.html',
  styleUrls: ['./book.search.component.css']

})

export class BookSearchComponent {
bookName;
bookArray =[];
userInfo;
  constructor(private _router: Router,private _bookSearch:BookSearchService){}


  ngOnInit(){
  let that =  this;
  let promise = this._bookSearch.getUserInfo();
  promise.then(function (data) {
    that.userInfo = data;
    console.log(that.userInfo);
    localStorage.setItem('userId', data['_id']);
  })
  }

  search(){
    let that = this;
    let promise = this._bookSearch.getSearchResult(this.bookName);
    promise.then(function (data) {
      let promise = that._bookSearch.getFavoriteBooks();
      promise.then(function (favorite) {
        console.log(favorite);
        console.log(data);
        let dataValues = data['items'];
        if (favorite && favorite['books'].length > 0){
        let books = favorite['books'];
          dataValues.forEach(function (item1, index) {
            books.forEach(function (item2) {
              if (item1.id == item2) {
                console.log("here");
                dataValues[index]['isFavorite'] = true;
              }
            })
            if (!dataValues[index].isFavorite) {
              dataValues[index].isFavorite = false;
            }
          })
      }
        that.bookArray  = dataValues;
        console.log(that.bookArray);
      })

})
  }

  showDetails(url){
    console.log(url);
   this._router.navigate(['book/information'],{queryParams:{link:url}})
  }

  addFavorite(bookId,isFavorite){
    console.log(isFavorite);
    let obj ={
      bookId:bookId,
      isFavorite:!isFavorite
    }
    let promise =  this._bookSearch.addFavorite(obj);
   promise.then(function (data) {
     console.log(data);
   })
  }

  logout(){
    let that = this;
   let promise = that._bookSearch.logout();
   promise.then(function (data) {
     if(data){
       localStorage.clear();
       that._router.navigate(['/login']);
     }
   })
  }

}
