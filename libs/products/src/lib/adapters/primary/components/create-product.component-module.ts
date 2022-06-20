import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateProductComponent } from './create-product.component';

@NgModule({
  imports: [ReactiveFormsModule],
  declarations: [CreateProductComponent],
  providers: [],
  exports: [CreateProductComponent],
})
export class CreateProductComponentModule {}
