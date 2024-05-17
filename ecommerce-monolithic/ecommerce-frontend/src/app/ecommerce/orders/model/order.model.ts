import { OrderItem } from "./orderItem.model";

export class Order {
    id: number;
    dateCreated: string;
    status: string;
    orderItems: OrderItem[];

    constructor(id: number, dateCreated: string, status: string, orderItems: OrderItem[]) {
        this.id = id;
        this.dateCreated = dateCreated;
        this.status = status;
        this.orderItems = orderItems;
    }
}
