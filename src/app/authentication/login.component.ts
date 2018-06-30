import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {AuthenticationService} from "./services/authentication.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _router: Router, private authService: AuthenticationService) {

  }
  ngOnInit(){
    if(localStorage.getItem('userId')){
      this._router.navigate(['book/search']);
    }
  }

  login() {

    this._router.navigate(['book/search']);
  }
}
