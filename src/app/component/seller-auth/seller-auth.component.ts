import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SellerService } from '../../service/seller/seller.service';
import { SignUp } from 'src/app/data/data-type';


@Component({
  selector: 'app-seller-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss']
})
export class SellerAuthComponent implements OnInit {

  showLogin = false;
  authError:string='';
  constructor(private _sellerService: SellerService) { }
  ngOnInit(): void {
    this._sellerService.reLoadSeller();
  }
  signup(data: SignUp): void {
    console.warn(data);
    this._sellerService.userSignUp(data);
  }

  login(data: SignUp): void {
    this.authError='';
   this._sellerService.userLogin(data);
   this._sellerService.isLoginError.subscribe((isError)=>{
    if(isError){
      this.authError='Email or Password is not correct'
    }
   })
  }

  openLogin() {
    this.showLogin = true;
  }
  openSignUp() {
    this.showLogin = false;
  }
}
