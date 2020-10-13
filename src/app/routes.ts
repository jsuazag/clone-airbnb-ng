import { Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { Page404Component } from './error-page/components/page404/page404.component';
import { HomeComponent } from './home/home.component';

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
    path: 'detail',
    component: DetailComponent
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
