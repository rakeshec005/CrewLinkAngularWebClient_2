import { Routes } from '@angular/router';
import { aboutComponent } from '../app/about/about.component';
import { HomeComponent } from '../app/home/home.component';
import { roleComponent } from '../app/role/role.component';
import { userComponent } from '../app/user/user.component';

export const APP_ROUTER_PROVIDERS: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: aboutComponent },
  { path: 'role', component: roleComponent },
  { path: 'user', component: userComponent }
];

