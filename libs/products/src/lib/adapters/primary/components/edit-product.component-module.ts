import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EditProductComponent } from './edit-product.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [EditProductComponent],
  providers: [],
  exports: [EditProductComponent],
})
export class EditProductComponentModule {}
