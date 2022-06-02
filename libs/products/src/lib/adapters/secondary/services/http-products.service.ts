import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { GetsAllProductDtoPort } from '../../../application/ports/secondary/dto/gets-all-product.dto-port';
import { ProductDTO } from '../../../application/ports/secondary/dto/product.dto';

@Injectable()
export class HttpProductsService implements GetsAllProductDtoPort {
  constructor(private _client: HttpClient) {}

  getAll(): Observable<ProductDTO[]> {
    return of([
      { id: 1, name: 'T Shirt', price: 10 },
      { id: 2, name: 'Jacket', price: 60 },
    ]);
  }
}
