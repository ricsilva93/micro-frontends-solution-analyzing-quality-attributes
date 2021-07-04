import { Product } from "./Product";

export type Purchase = {
    products: Product[],
    paymentMethod: string,
    totalPrice: number
}