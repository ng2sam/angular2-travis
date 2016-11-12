import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { ProductService, IProduct } from './shared';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit/*, OnDestroy*/ {
  products: Observable<IProduct[]>;
  errorMessage: string;

  constructor(private _productService: ProductService) { }

  ngOnInit(): void{
      this.products = this._productService.getProducts();
         /* .subscribe(
            products => this.products = products,
            error => this.errorMessage = <any>error
          );*/
  }
 /* OnDestroy(): void{
  //  this.products.();
  }*/

}
