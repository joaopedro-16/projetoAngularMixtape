import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { DetailsComponent } from './component/details/details.component';

export const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page'
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Track details'
  }
];
export default routeConfig;