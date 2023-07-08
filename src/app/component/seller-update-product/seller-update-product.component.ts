import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product/product.service';
import { Product } from 'src/app/data/data-type';

@Component({
  selector: 'app-seller-update-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.scss']
})
export class SellerUpdateProductComponent implements OnInit {

  product: Product | undefined
  constructor(private _router: ActivatedRoute, private _productService: ProductService) {

  }
  ngOnInit(): void {
    let productId = this._router.snapshot.paramMap.get('id');
    productId && this.getProductById(productId);
  }

  getProductById(id: any) {
    this._productService.getProductById(id).subscribe({
      next: (res) => {
        this.product = res;
      },
      error: (err) => {
        alert(err);
      }
    })
  }

  updateProduct(data: Product) {
    if(this.product){
      data.id=this.product.id
    }
    this._productService.updateProduct(data).subscribe({
      next:(res)=>{

      },
      error:(err)=>{
        alert(err)
      }
    })
  }
}
