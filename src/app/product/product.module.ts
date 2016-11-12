import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductService } from './shared';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [ProductService],
  declarations: [ProductComponent],
  exports: [
      ProductComponent
]
})
export class ProductModule { }
