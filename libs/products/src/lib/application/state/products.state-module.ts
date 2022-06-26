import { NgModule } from '@angular/core';
import { ProductsState } from './products.state';
import { LOAD_PRODUCTS_COMMAND } from '../ports/primary/command/load-products.command-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [ProductsState, { provide: LOAD_PRODUCTS_COMMAND, useExisting: ProductsState }],
  exports: [],
})
export class ProductsStateModule {}
