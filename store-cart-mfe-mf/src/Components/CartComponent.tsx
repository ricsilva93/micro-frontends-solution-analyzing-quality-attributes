import { Badge, Button, Drawer, IconButton } from "@material-ui/core";
import * as React from "react";
import { Cart } from "../Cart/Cart";
import { CartItemType } from "../CartItem/CartItem";
import { ButtonWrapper, Wrapper } from "./CartComponent.styles";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Link } from "react-router-dom";

export type CartType = {
    products: CartItemType[];
}

interface CartProps {
    cartItems: CartItemType[],
    isCartOpen: boolean,
  }

export class CartComponent extends React.Component<{}>{

    public constructor(props: CartProps) {
        super(props);
        this.handleAddToCart.bind(this);
        this.handleRemoveFromCart.bind(this);
      }

    public state = {
        cartItems: [] as CartItemType[],
        isCartOpen: false as boolean
    };

    async componentDidMount() {
        window.addEventListener("product-added-to-cart", async (ev) => {
            const ce = ev as CustomEvent;
            const updatedState = this.getEventState(this.state.cartItems, ce);
            this.setState({ cartItems: updatedState });
            await this.updateCart(updatedState);
        });

        window.addEventListener("purchase-completed", async (ev) => {
            this.setState({ cartItems: [] });
            await this.updateCart([]);
        });
    }

    getEventState(previousState: CartItemType[], ce: CustomEvent): CartItemType[] {
        const isItemInCart = previousState.find(item => item.id === ce.detail.clickedItem.id)

        if (isItemInCart) {

            return previousState.map(item => (
                item.id === ce.detail.clickedItem.id
                    ? { ...item, amount: item.amount + 1 }
                    : item
            ));
        }
        return [...previousState, { ...ce.detail.clickedItem as CartItemType, amount: 1 }];
    }

    async updateCart(state: CartItemType[]): Promise<void> {
        const body = {
            products: state
        };

        await fetch("http://localhost:30006/api/cart", {
            method: "PUT", body: JSON.stringify(body), headers: {
                'Accept': "application/json, text/plain, */*",
                'Content-Type': "application/json"
            }
        });
    }

    getTotalItems(items: CartItemType[]) {
        console.log("get total items")
        console.log("TOTAL ITEMS = " + JSON.stringify(items))
        return items.reduce((ack: number, item) => ack + item.amount, 0);
    }

    async getState(previousState: CartItemType[], clickedItem: CartItemType): Promise<CartItemType[]> {

        const isItemInCart = previousState.find(item => item.id === clickedItem.id)

        if (isItemInCart) {
            const updatedState = previousState.map(item => (
                item.id === clickedItem.id
                    ? { ...item, amount: item.amount + 1 }
                    : item
            ))
            return updatedState;
        }

        return [...previousState, { ...clickedItem, amount: 1 }];
    }

    handleAddToCart = async (clickedItem: CartItemType) => {
        const updatedState = await this.getState(this.state.cartItems, clickedItem);
        await this.updateCart(updatedState);
        this.setState({ cartItems: updatedState });
    }

    handleRemoveFromCart = async (id: number) => {
        const cartItems = this.state.cartItems;

        let updatedState: CartItemType[];

        cartItems.every((value, index, items) => {
            if (value.id === id) {
                if (value.amount === 1) {
                    updatedState = items.filter(currentItems => currentItems.id != value.id)
                    return false;
                }
                items[index].amount -= 1;
                updatedState = items;
                return false;
            }
            return true;
        });

        this.setState({ cartItems: updatedState })
        await this.updateCart(updatedState);
    }



    render() {

        return (
            <Wrapper>
                <IconButton
                    color="inherit"
                    onClick={() => { this.setState({ isCartOpen: true }) }}
                >
                    <Badge badgeContent={this.getTotalItems(this.state.cartItems)} color='error'>
                        <AddShoppingCartIcon />
                        Cart
                    </Badge>
        </IconButton>


                <Drawer anchor='left' open={this.state.isCartOpen} onClose={() => { this.setState({ isCartOpen: false }) }}>
                    <Cart
                        cartItems={this.state.cartItems}
                        addToCart={this.handleAddToCart}
                        removeFromCart={this.handleRemoveFromCart}
                    />
                    { this.state.cartItems.length > 0 ?
                                            <ButtonWrapper>
                                            <Button variant="contained" color="primary" onClick={() => {this.setState({ isCartOpen: false })} } component={Link} to="/checkout">
                                                    Checkout
                                                </Button>
                                            </ButtonWrapper>
                                            
                    : null}
                </Drawer>
            </Wrapper>
        );
    }
}

export default CartComponent;