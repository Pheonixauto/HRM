import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product/product.service';
import { Product } from 'src/app/data/data-type';
import { switchMap } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  searchResult: undefined | Product[]
  private changQuery: Subscription | undefined;
  constructor(private _activateRoute: ActivatedRoute, private _productService: ProductService) {

  }
  ngOnDestroy(): void {
    this.changQuery?.unsubscribe();
  }
  ngOnInit(): void {
    // Đăng ký Observable để theo dõi sự thay đổi của snapshot.paramMap.get
    this.changQuery = this._activateRoute.paramMap.pipe(
      switchMap(params => {
        // Thực hiện các xử lý khi paramMap thay đổi
        const paramValue = params.get('query');

        // Các xử lý khác...
        paramValue && this.getProductBySearch(paramValue);
        console.log(paramValue)

        // Trả về một Observable nếu cần
        return new Observable<any>();
      })
    ).subscribe();

  }

  getProductBySearch(query: string) {
    this._productService.searchProduct(query).subscribe({
      next: (res) => {
        if (res) {
          this.searchResult = res;
        }
      },
      error: (err) => {
        alert(err)
      }
    })
  }
}
