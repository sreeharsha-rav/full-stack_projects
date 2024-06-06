import e from "express";
import { Product } from "../../products/model/product.model";

export class CartItem {
    product: Product;
    quantity: number;

    constructor(product: Product, quantity: number = 1) {
        this.product = product;
        this.quantity = quantity;
    }
}

export class Cart {
    items: CartItem[] = [];

    constructor() { }

    addProduct(product: Product) {
        const item = this.items.find((item) => item.product.id === product.id);
        if (item) {
            item.quantity++;
        } else {
            this.items.push(new CartItem(product));
        }
    }

    removeProduct(product: Product) {
        const index = this.items.findIndex((item) => item.product.id === product.id);
        if (index > -1) {
            this.items[index].quantity--;
            if (this.items[index].quantity === 0) {
                this.items.splice(index, 1);
            }
        }
    }

    getTotal(): number {
        return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }

    reset() {
        this.items = [];
    }

}