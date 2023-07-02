import { Routes } from '@angular/router';

export const HOME_ROUTER: Routes = [
  { path: '', loadComponent: () => import('../seller-auth/seller-auth.component').then(m => m.SellerAuthComponent) }
];

