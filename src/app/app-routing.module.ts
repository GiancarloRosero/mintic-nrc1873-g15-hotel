import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home-hotel.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/home/home.module')
      .then(m => m.HomeModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./components/auth/auth.module')
      .then(m => m.AuthModule)
  },
  {
    path: '**',
    component: HomeComponent
  },
];

export const routing = RouterModule.forRoot(routes);
