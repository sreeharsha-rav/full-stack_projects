import { Product } from "../../products/model/product.model";

export class OrderItemResponse {
    product: Product;
    quantity: number;
    totalPrice: number;

    constructor(product: Product, quantity: number, totalPrice: number) {
        this.product = product;
        this.quantity = quantity;
        this.totalPrice = totalPrice;
    }

}