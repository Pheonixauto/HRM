import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product/product.service';
import { Product } from 'src/app/data/data-type';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product :undefined|Product;
  constructor(private _activatedRoute : ActivatedRoute, private _productService :ProductService){}
  ngOnInit(): void {
    let productId = this._activatedRoute.snapshot.paramMap.get('productId');
    this._productService.getProductById(productId).subscribe({
      next:(res)=>{
        this.product=res;
      },
      error:(err)=>{
        alert(err);
      }
    })
  }

}
