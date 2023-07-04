import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SellerService } from '../../service/seller/seller.service';
import { Route, Router } from '@angular/router';
import { SignUp } from 'src/app/data/data-type';


@Component({
  selector: 'app-seller-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss']
})
export class SellerAuthComponent implements OnInit {

  constructor(private _sellerService: SellerService) { }
  ngOnInit(): void {
    this._sellerService.reLoadSeller();
  }
  signup(data: SignUp): void {
    console.warn(data);
    this._sellerService.userSignUp(data);
  }
}
