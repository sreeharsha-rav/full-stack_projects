import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';
import { inject, Injectable } from '@angular/core';

const PRODUCTS_URL = 'http://localhost:8080/api/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient);

  constructor() { }

  getAllProducts() : Observable<Product[]> {
    return this.http.get<Product[]>(PRODUCTS_URL);
  }

}
