import { NgModule } from '@angular/core';
import { InMemoryProductsStorage } from './in-memory-products.storage';
import { SETS_STATE_PRODUCT_CONTEXT } from '../../../application/ports/secondary/context/sets-state-product.context-port';
import { SELECTS_PRODUCT_CONTEXT } from '../../../application/ports/secondary/context/selects-product.context-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    InMemoryProductsStorage,
    {
      provide: SETS_STATE_PRODUCT_CONTEXT,
      useExisting: InMemoryProductsStorage,
    },
    { provide: SELECTS_PRODUCT_CONTEXT, useExisting: InMemoryProductsStorage },
  ],
  exports: [],
})
export class InMemoryProductsStorageModule {}
