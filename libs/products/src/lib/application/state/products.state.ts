import { Inject, Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { filter, map, switchMap, take } from 'rxjs/operators';
import { LoadProductsCommandPort } from '../ports/primary/command/load-products.command-port';
import { GetsCurrentProductListQueryPort } from '../ports/primary/query/gets-current-product-list.query-port';
import { RemoveProductCommandPort } from '../ports/primary/command/remove-product.command-port';
import { CreateProductCommandPort } from '../ports/primary/command/create-product.command-port';
import { UpdateProductCommandPort } from '../ports/primary/command/update-product.command-port';
import { GetsEditProductQueryPort } from '../ports/primary/query/gets-edit-product.query-port';
import { SelectProductCommandPort } from '../ports/primary/command/select-product.command-port';
import { ChangeProductPriceCommandPort } from '../ports/primary/command/change-product-price.command-port';
import {
  GETS_ALL_PRODUCT_DTO,
  GetsAllProductDtoPort,
} from '../ports/secondary/dto/gets-all-product.dto-port';
import {
  SETS_STATE_PRODUCT_CONTEXT,
  SetsStateProductContextPort,
} from '../ports/secondary/context/sets-state-product.context-port';
import {
  SELECTS_PRODUCT_CONTEXT,
  SelectsProductContextPort,
} from '../ports/secondary/context/selects-product.context-port';
import {
  REMOVES_PRODUCT_DTO,
  RemovesProductDtoPort,
} from '../ports/secondary/dto/removes-product.dto-port';
import {
  ADDS_PRODUCT_DTO,
  AddsProductDtoPort,
} from '../ports/secondary/dto/adds-product.dto-port';
import {
  SETS_PRODUCT_DTO,
  SetsProductDtoPort,
} from '../ports/secondary/dto/sets-product.dto-port';
import { LoadProductsCommand } from '../ports/primary/command/load-products.command';
import { ProductListQuery } from '../ports/primary/query/product-list.query';
import { RemoveProductCommand } from '../ports/primary/command/remove-product.command';
import { ProductContext } from '../ports/secondary/context/product.context';
import { CreateProductCommand } from '../ports/primary/command/create-product.command';
import { UpdateProductCommand } from '../ports/primary/command/update-product.command';
import { EditProductQuery } from '../ports/primary/query/edit-product.query';
import { ProductDTO } from '../ports/secondary/dto/product.dto';
import { SelectProductCommand } from '../ports/primary/command/select-product.command';
import { ChangeProductPriceCommand } from '../ports/primary/command/change-product-price.command';
import { mapFromProductContext } from './product-list-query.mapper';

const makeRandomId = (): number =>
  parseInt(`${new Date().getTime()}${Math.ceil(Math.random() * 1000)}`);

@Injectable()
export class ProductsState
  implements LoadProductsCommandPort, GetsCurrentProductListQueryPort
{
  constructor(
    @Inject(GETS_ALL_PRODUCT_DTO)
    private _getsAllProductDto: GetsAllProductDtoPort,
    @Inject(SETS_STATE_PRODUCT_CONTEXT)
    private _setsStateProductContext: SetsStateProductContextPort,
    @Inject(SELECTS_PRODUCT_CONTEXT)
    private _selectsProductContext: SelectsProductContextPort
  ) {}

  loadProducts(command: LoadProductsCommand): Observable<void> {
    return this._getsAllProductDto
      .getAll()
      .pipe(
        switchMap((products) =>
          this._setsStateProductContext.setState({ all: products })
        )
      );
  }
  getCurrentProductListQuery(): Observable<ProductListQuery> {
    return this._selectsProductContext
      .select()
      .pipe(map((ctx) => mapFromProductContext(ctx)));
  }
}
