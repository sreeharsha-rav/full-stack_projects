import { OrderItemResponse } from "./orderItemResponse.dto";

export class OrderResponse {
    id: number;
    dateCreated: string;
    status: string;
    totalOrderPrice: number;
    numberOfItems: number;
    orderItems: OrderItemResponse[];

    constructor(id: number, dateCreated: string, status: string, totalOrderPrice: number, numberOfItems: number, orderItems: OrderItemResponse[]) {
        this.id = id;
        this.dateCreated = dateCreated;
        this.status = status;
        this.totalOrderPrice = totalOrderPrice;
        this.numberOfItems = numberOfItems;
        this.orderItems = orderItems;
    }

}