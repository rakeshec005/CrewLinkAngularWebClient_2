import { Routes } from '@angular/router';
import { aboutComponent } from '../app/about/about.component';
import { HomeComponent } from '../app/home/home.component';
import { userRoleComponent } from '../app/userRole/userRole.component';
import { userComponent } from '../app/user/user.component';
import { dashboardComponent } from '../app/dashboard/dashboard.component';
import { loginComponent } from '../app/login/login.component';

export const APP_ROUTER_PROVIDERS: Routes = [
  { path: '', component: dashboardComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: aboutComponent },
  { path: 'userRole', component: userRoleComponent },
  { path: 'user', component: userComponent },
  { path: 'login', component: loginComponent }
];

