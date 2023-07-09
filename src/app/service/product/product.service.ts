import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/data/data-type';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) { }
  addProduct(product: Product): Observable<any> {
    return this._http.post('http://localhost:3000/product', product);
  }

  updateProduct(product: Product): Observable<any> {
    return this._http.put(`http://localhost:3000/product/${product.id}`, product);
  }

  getProductList(): Observable<any> {
    return this._http.get('http://localhost:3000/product');
  }

  getProductById(id: any): Observable<any> {
    return this._http.get(`http://localhost:3000/product/${id}`);
  }

  deleteProduct(id: any): Observable<any> {
    return this._http.delete(`http://localhost:3000/product/${id}`);
  }

  getPopularProduct(): Observable<any> {
    return this._http.get<Product[]>('http://localhost:3000/product?_limit=2');
  }

  getTrendyProduct(): Observable<any> {
    return this._http.get<Product[]>(`http://localhost:3000/product?_limit=2`);
  }

  searchProduct(query: string): Observable<any> {
    return this._http.get<Product[]>(`http://localhost:3000/product?q=${query}`);
  }
}
