import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home-hotel.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/home/home.module')
      .then(m => m.HomeModule)
  },
  {
    path: 'rooms',
    loadChildren: () => import('./components/rooms/rooms.module')
      .then(m => m.RoomsModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./components/auth/auth.module')
      .then(m => m.AuthModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./components/admin/admin.module')
      .then(m => m.AdminModule)
  },
  {
    path: '**',
    component: HomeComponent
  },
];

export const routing = RouterModule.forRoot(routes);
