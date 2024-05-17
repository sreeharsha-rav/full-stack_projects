import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { OrderForm } from '../dto/orderForm.dto';
import { Observable } from 'rxjs';
import { OrderResponse } from '../dto/orderResponse.dto';

const ORDERS_URL = 'http://localhost:8080/api/orders';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private http = inject(HttpClient);

  constructor() { }

  getAllOrders() : Observable<OrderResponse[]> {
    return this.http.get<OrderResponse[]>(ORDERS_URL);
  }

  createOrder(orderForm: OrderForm) : Observable<OrderResponse> {
    return this.http.post<OrderResponse>(ORDERS_URL, orderForm);
  }

}
