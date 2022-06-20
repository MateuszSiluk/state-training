import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EditProductPriceComponent } from './edit-product-price.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [EditProductPriceComponent],
  providers: [],
  exports: [EditProductPriceComponent],
})
export class EditProductPriceComponentModule {}
