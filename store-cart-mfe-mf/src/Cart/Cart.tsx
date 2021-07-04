import * as React from "react";
import CartItem from "../CartItem/CartItem";

import { CartStyle } from './Cart.styles';

import { CartItemType } from "../CartItem/CartItem";

export interface Props {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}

export class Cart extends React.Component<Props, { cartItems, addToCart, removeFromCart }>{

    calculateTotalPrice = (items: CartItemType[]) =>
    items.reduce((accumulator: number, item) => accumulator + item.amount * item.price, 0);

    render() {

        const CartProps = this.props;

        return (
            <CartStyle>
                <h2>Your Shopping Cart</h2>
                {CartProps.cartItems.length === 0 ? <p>No items in cart.</p> : null}
                {CartProps.cartItems.map(item => (
                    <CartItem
                        key={item.id}
                        item={item}
                        addToCart={CartProps.addToCart}
                        removeFromCart={CartProps.removeFromCart}
                    />
                ))}
                <h2>Total: ${this.calculateTotalPrice(CartProps.cartItems).toFixed(2)}</h2>
            </CartStyle>
        );
    }
}

export default Cart;