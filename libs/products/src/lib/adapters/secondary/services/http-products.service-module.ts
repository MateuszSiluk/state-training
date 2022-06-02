import { NgModule } from '@angular/core';
import { HttpProductsService } from './http-products.service';
import { GETS_ALL_PRODUCT_DTO } from '../../../application/ports/secondary/dto/gets-all-product.dto-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    HttpProductsService,
    { provide: GETS_ALL_PRODUCT_DTO, useExisting: HttpProductsService },
  ],
  exports: [],
})
export class HttpProductsServiceModule {}
