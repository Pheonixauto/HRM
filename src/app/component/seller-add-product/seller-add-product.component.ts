import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from 'src/app/data/data-type';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-seller-add-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.scss']
})
export class SellerAddProductComponent {

  addProductMessage:string|undefined;
  constructor(private _productService: ProductService) {

  }
  addNewProduct(data: Product) {
    this._productService.addProduct(data).subscribe({
      next: (result) => {
        if(result){
          this.addProductMessage ="Add New Product Successfully"
        }
        setTimeout(() => {
          this.addProductMessage=undefined;
        }, 3000);
       },
      error: (err) => {

      }
    })
    console.log(data);

  }
}
