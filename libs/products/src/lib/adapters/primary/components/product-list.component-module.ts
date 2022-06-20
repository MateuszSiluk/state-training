import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { RemoveProductDirectiveModule } from '../directives/remove-product.directive-module';
import { ShowModalDirectiveModule } from '../directives/show-modal.directive-module';

@NgModule({
  imports: [
    CommonModule,
    RemoveProductDirectiveModule,
    ShowModalDirectiveModule,
  ],
  declarations: [ProductListComponent],
  providers: [],
  exports: [ProductListComponent],
})
export class ProductListComponentModule {}
