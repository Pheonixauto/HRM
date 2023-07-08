import { Routes } from '@angular/router';
import { authGuard } from 'src/app/auth/auth.guard';

export const MAIN_ROUTER: Routes = [
  {
    path: 'home', loadComponent: () => import('../home/home.component')
      .then(m => m.HomeComponent)
  },
  {
    path: 'seller-home', loadComponent: () => import('../seller-home/seller-home.component')
      .then(m => m.SellerHomeComponent),
    canActivate: [authGuard]
  },
  {
    path: 'seller-auth', loadComponent: () => import('../seller-auth/seller-auth.component')
      .then(m => m.SellerAuthComponent)
  },
  {
    path: 'seller-add-product', loadComponent: () => import('../seller-add-product/seller-add-product.component')
      .then(m => m.SellerAddProductComponent),
    canActivate: [authGuard]
  },
  {
    path: 'seller-update-product/:id', loadComponent: () => import('../seller-update-product/seller-update-product.component')
      .then(m => m.SellerUpdateProductComponent),
    canActivate: [authGuard]
  }
];
