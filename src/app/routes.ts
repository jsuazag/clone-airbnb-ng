import { Routes } from '@angular/router';
import { DetailComponent } from './detail/components/detail/detail.component';
import { HomeComponent } from './home/components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'detail',
    component: DetailComponent
  }
];
