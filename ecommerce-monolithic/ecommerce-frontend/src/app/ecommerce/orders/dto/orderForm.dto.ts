import { OrderItem } from "../model/orderItem.model";

export class OrderForm {
    orderItems: OrderItem[];

    constructor(orderItems: OrderItem[]) {
        this.orderItems = orderItems;
    }
}