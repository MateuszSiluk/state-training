import { NgModule } from '@angular/core';
import { HttpProductsService } from './http-products.service';
import { GETS_ALL_PRODUCT_DTO } from '../../../application/ports/secondary/dto/gets-all-product.dto-port';
import { REMOVES_PRODUCT_DTO } from '../../../application/ports/secondary/dto/removes-product.dto-port';
import { ADDS_PRODUCT_DTO } from '../../../application/ports/secondary/dto/adds-product.dto-port';
import { SETS_PRODUCT_DTO } from '../../../application/ports/secondary/dto/sets-product.dto-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    HttpProductsService,
    { provide: GETS_ALL_PRODUCT_DTO, useExisting: HttpProductsService },
    { provide: REMOVES_PRODUCT_DTO, useExisting: HttpProductsService },
    { provide: ADDS_PRODUCT_DTO, useExisting: HttpProductsService },
    { provide: SETS_PRODUCT_DTO, useExisting: HttpProductsService },
  ],
  exports: [],
})
export class HttpProductsServiceModule {}
