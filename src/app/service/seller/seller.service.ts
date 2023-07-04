import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { SignUp } from 'src/app/data/data-type';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  isSellerLogedIn= new BehaviorSubject<boolean>(false);
  constructor(private _http: HttpClient, private _route: Router) { }

  userSignUp(data: SignUp) {
    return this._http.post('http://localhost:3000/seller', data, {observe:'response'})
    .subscribe({
      next:(res)=>{
        this.isSellerLogedIn.next(true);
        localStorage.setItem('seller',JSON.stringify(res.body))
        this._route.navigate(['main/seller-home'])
      },
      error:(err)=>{
        console.log(err);
      }
    });
  }

  reLoadSeller(){
    if(localStorage.getItem('seller')){
      this.isSellerLogedIn.next(true);
      this._route.navigate(['main/seller-home'])
    }
  }
}
