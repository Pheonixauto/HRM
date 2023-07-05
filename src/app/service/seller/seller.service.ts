import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Login, SignUp } from 'src/app/data/data-type';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  isSellerLogedIn= new BehaviorSubject<boolean>(false);
  isLoginError = new EventEmitter<boolean>(false);
  constructor(private _http: HttpClient, private _route: Router) { }

  userSignUp(data: SignUp) {
    return this._http.post('http://localhost:3000/seller', data, {observe:'response'})
    .subscribe({
      next:(res)=>{
        this.isSellerLogedIn.next(true);
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

  userLogin(data:Login){
   return this._http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,{observe:'response'})
   .subscribe({
    next:(res:any)=>{
      if(res?.body && res.body.length){
        console.log('ok');
        localStorage.setItem('seller',JSON.stringify(res.body))
        this._route.navigate(['main/seller-home'])
      }
      else{
        console.log('faild');
        this.isLoginError.emit(true);
      }
    },
    error:(err)=>{
      console.log(err);
    }
   })
  }
}
