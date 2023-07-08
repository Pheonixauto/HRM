import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/service/product/product.service';
import { Product } from 'src/app/data/data-type';
import{faTrash,faEdit} from'@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-seller-home',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule, RouterLink],
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.scss']
})
export class SellerHomeComponent implements OnInit {

  icon_delete = faTrash;
  icon_eidt= faEdit;
  productList: undefined|Product[];
  productMessage:string|undefined;
  constructor(private _productService :ProductService){

  }
  ngOnInit(): void {
    this.getProductList();
  }

  getProductList(){
    this._productService.getProductList().subscribe({
      next:(res)=>{
        console.log(res);
        this.productList=res;
      },
      error:(err)=>{

      }
    })
  }

  deleteProduct(id:any){
    this._productService.deleteProduct(id).subscribe({
      next:(res)=>{
        if(res){
          this.productMessage="Delete Product Successfully";
          this.getProductList();
        }
        setTimeout(() => {
          this.productMessage=undefined;
        }, 3000);
      },
      error:(err)=>{
        alert(err);
      }
    })
  }

}
