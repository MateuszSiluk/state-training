import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { GetsAllProductDtoPort } from '../../../application/ports/secondary/dto/gets-all-product.dto-port';
import { RemovesProductDtoPort } from '../../../application/ports/secondary/dto/removes-product.dto-port';
import { AddsProductDtoPort } from '../../../application/ports/secondary/dto/adds-product.dto-port';
import { SetsProductDtoPort } from '../../../application/ports/secondary/dto/sets-product.dto-port';
import { ProductDTO } from '../../../application/ports/secondary/dto/product.dto';

@Injectable()
export class HttpProductsService
  implements
    GetsAllProductDtoPort,
    RemovesProductDtoPort,
    AddsProductDtoPort,
    SetsProductDtoPort
{
  private _data = [
    { id: 1, name: 'T Shirt', price: 10 },
    { id: 2, name: 'Jacket', price: 60 },
  ];
  constructor(private _client: HttpClient) {}

  getAll(): Observable<ProductDTO[]> {
    return of([...this._data]);
  }

  remove(id: number): Observable<void> {
    this._data = this._data.filter((p) => p.id !== id);
    return of(void 0);
  }

  add(product: ProductDTO): Observable<void> {
    this._data.push(product);
    return of(void 0);
  }

  set(product: Partial<ProductDTO>): Observable<void> {
    this._data = this._data.map((p) =>
      p.id === product.id ? { ...p, ...product } : p
    );
    return of(void 0);
  }
}
