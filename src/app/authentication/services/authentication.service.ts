import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class  AuthenticationService {
  constructor(private _http: HttpClient){
  }
     getUserDetail(){
       let that =this;
       return new Promise(function(resolve, reject){
         return that._http.get('/api/auth/google').subscribe(function (data) {
           resolve(data);
         },function (error) {
           reject (error)
         })
       })
     }
}
