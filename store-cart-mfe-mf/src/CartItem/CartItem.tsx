import * as React from "react";
import { CartItemStyle } from "./CartItem.styles";
import Button from "@material-ui/core/Button";

export type CartItemType = {
    id: number;
    category: string;
    description: string;
    image: string;
    price: number;
    title: string;
    amount: number;
}

interface Props {
    item: CartItemType;
    addToCart: (clickedItem : CartItemType) => void;
    removeFromCart: (id: number) => void;
}

export class CartItem extends React.Component<Props,{ item, addToCart, removeFromCart }>{
    render(){
        const CartItemProps = this.props;

        return(
            <CartItemStyle>
            <div>
                <h3>{CartItemProps.item.title}</h3>
                <div className="information">
                    <p>Price: ${CartItemProps.item.price}</p>
                    <p>Total: ${(CartItemProps.item.amount * CartItemProps.item.price).toFixed(2)}</p>
                </div>
                <div className="buttons">
                    <Button
                        size="small"
                        disableElevation
                        variant = "contained"
                        onClick={() => CartItemProps.removeFromCart(CartItemProps.item.id)}
                    >
                        -
                    </Button>
                    <p>{CartItemProps.item.amount}</p>
                    <Button
                        size="small"
                        disableElevation
                        variant = "contained"
                        onClick={() => CartItemProps.addToCart(CartItemProps.item)}
                    >
                        +
                    </Button>
                </div>
            </div>
            <img src={CartItemProps.item.image} alt={CartItemProps.item.title} />
        </CartItemStyle>
        );
    }
}

    export default CartItem;
