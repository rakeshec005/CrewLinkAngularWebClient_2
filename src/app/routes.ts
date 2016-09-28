import { Routes } from '@angular/router';
import { aboutComponent } from '../app/about/about.component';
import { HomeComponent } from '../app/home/home.component';

export const APP_ROUTER_PROVIDERS: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: aboutComponent }
];

