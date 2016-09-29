import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { APP_ROUTER_PROVIDERS } from './routes';

/* ALL SERVICE DECLARATION  */
import {ToasterModule, ToasterService} from 'angular2-toaster/angular2-toaster';
import {HttpService} from './httpService';

/* ALL COMPONENT DECLARATION  */
import { AppComponent } from './app.component';
import { aboutComponent } from '../app/about/about.component';
import { HomeComponent } from '../app/home/home.component';
import { headerComponent} from '../app/header/header.component';
import { footerComponent} from '../app/footer/footer.component';
import { roleComponent } from '../app/role/role.component';
import { userComponent } from '../app/user/user.component';



@NgModule({
  declarations: [
    AppComponent,
    aboutComponent,
    HomeComponent,
    headerComponent,
    footerComponent,
    roleComponent,
    userComponent
  ],
  imports: [
    ToasterModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    RouterModule.forRoot(APP_ROUTER_PROVIDERS)
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log("Inside App.Modules Constructor");
  }
}
