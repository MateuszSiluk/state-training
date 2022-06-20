import { Inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoadProductsCommand } from '../../../application/ports/primary/command/load-products.command';
import {
  LOAD_PRODUCTS_COMMAND,
  LoadProductsCommandPort,
} from '../../../application/ports/primary/command/load-products.command-port';

@Injectable()
export class LoadProductsResolver implements Resolve<void> {
  constructor(
    @Inject(LOAD_PRODUCTS_COMMAND)
    private _loadProductsCommand: LoadProductsCommandPort
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<void> {
    return this._loadProductsCommand.loadProducts(new LoadProductsCommand());
  }
}
