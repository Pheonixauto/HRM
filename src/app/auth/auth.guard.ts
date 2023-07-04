import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { SellerService } from '../service/seller/seller.service';


export const authGuard: CanActivateFn = (route, state) => {
  const service = inject(SellerService)
  if(localStorage.getItem('seller')){
    return true;
  }
  return service.isSellerLogedIn;
};




