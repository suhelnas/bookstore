import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import {LoginComponent} from "./authentication/login.component";
import {BookSearchComponent} from "./booksearch/book.search.component";
import {AuthenticationService} from './authentication/services/authentication.service';
import {BookSearchService} from "./booksearch/services/book.search.service";

let appRoutes = [{ path: 'login',component: LoginComponent },
{
  path: 'book/search',
    component: BookSearchComponent,
  data: { title: 'Book Search' }
},
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },{path:'**',redirectTo:'/login}',pathMatch:'full'}];
@NgModule({
  declarations: [
    AppComponent,LoginComponent,BookSearchComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthenticationService,BookSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
