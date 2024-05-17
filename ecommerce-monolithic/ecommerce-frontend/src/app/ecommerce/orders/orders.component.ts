import { Component, inject } from '@angular/core';
import { OrderResponse } from './dto/orderResponse.dto';
import { OrderService } from './service/order.service';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [],
  templateUrl: './orders.component.html',
  styles: ``
})
export class OrdersComponent {
  orders: OrderResponse[];

  private orderService = inject(OrderService);

  constructor() {
    this.orders = [];
  }

  ngOnInit() {
    this.loadOrders();
  }

  loadOrders() {
    this.orderService.getAllOrders().subscribe({
      next: (orders: OrderResponse[]) => {
        this.orders = orders;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

}
