import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ProductService } from 'src/app/service/product/product.service';
import { Product } from 'src/app/data/data-type';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuType: string = 'default'
  sellerName: string = '';
  searchResultProduct: undefined|Product[]
  constructor(private _route: Router, private _productService: ProductService) { }
  ngOnInit(): void {
    this._route.events.subscribe({
      next: (val: any) => {
        if (val.url) {
          if (localStorage.getItem('seller') && val.url.includes('seller')) {
            console.log('in seller area');
            this.menuType = 'seller';
            let sellerStore = localStorage.getItem('seller')
            let sellerData = sellerStore && JSON.parse(sellerStore)[0];
            this.sellerName = sellerData.name;
          } else {
            console.log('out seller area');
            this.menuType = 'default';
          }
        }
      },
      error: (err) => {

      }
    })
  }

  logOut() {
    localStorage.removeItem('seller');
    this._route.navigate(['/'])
  }

  searchForProducts(query: KeyboardEvent) {
    if (query) {
      const element = query.target as HTMLInputElement
      console.log(element.value)
      this.getProductBySearch(element.value)
    }
  }

  getProductBySearch(query: string) {
    this._productService.searchProduct(query).subscribe({
      next: (res) => {
        console.log(res);
        this.searchResultProduct=res
      }, error: (err) => {
        alert(err)
      }
    })
  }

  hideSearch(){
    this.searchResultProduct=undefined
  }

  submitSearch(value:string){
    console.log(value)
    if(value){
      this._route.navigate([`/main/search/${value}`])
    }
  }
}
