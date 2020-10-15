import { Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { Page404Component } from './error-page/components/page404/page404.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'detail/:id',
    component: DetailComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: '404',
    component: Page404Component
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];
