import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { HeaderComponent } from 'src/app/share/component/header/header.component';
import { RouterModule } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from 'src/app/service/product/product.service';
import { Product } from 'src/app/data/data-type';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgbCarouselModule, NgIf],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  popularProduct: undefined | Product[];
  trendyProducts: undefined | Product[];
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor(private _productService: ProductService) {

  }
  ngOnInit(): void {
    this.getPopularProducts();
    this.getTrendyProducts();
    console.log(3)

  }

  async getPopularProducts() {
    console.log(1)
    this._productService.getPopularProduct().subscribe({
      next: (res) => {
        console.log(res)
        this.popularProduct = res;
      },
      error: (err) => {
        alert(err)
      }
    })
  }

  async getTrendyProducts() {
    console.log(2)
    this._productService.getTrendyProduct().subscribe({
      next: (res) => {
        console.log(res)
        this.trendyProducts = res;
      },
      error: (err) => {
        alert(err)
      }
    })
  }
}
