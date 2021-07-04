import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@material-ui/core";
import * as React from "react";
import { Cart } from "../Models/Cart";
import { Product } from "../Models/Product";
import { Purchase } from "../Models/Purchase";
import { CheckoutItemStyle, CheckoutStyle, Separator } from "./Checkout.styles";
import { Link } from "react-router-dom";

interface IProps {
    purchases: Purchase[],
    cart: Cart,
    paymentMethod: String
  }

export class CheckoutItems extends React.Component {

    public constructor(props: IProps) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.onClickConfirmButton = this.onClickConfirmButton.bind(this);
      }

    public state = {
        purchases: [] as Purchase[],
        cart: { products: [] } as Cart,
        paymentMethod: "Credit Card" as String
    };

    async componentDidMount() {
        console.log("fire get cart");
        await fetch('http://localhost:30006/api/cart', {
            method: "GET", headers: {
                'Accept': "application/json, text/plain, */*",
                'Content-Type': "application/json"
            }
        })
            .then(async response => {
                console.log(response.body)
                const data = await response.json()
                this.setState({ cart: data })
            })
            .catch(console.log);

        console.log("Cart => " + JSON.stringify(this.state.cart));
    }

   calculateTotal = (items: Product[]) =>
    items?.reduce((accumulator: number, item) => accumulator + item.amount * item.price, 0);

    handleChange = (ev) =>
    this.setState({ paymentMethod: ev.target.value });

    async onClickConfirmButton() {
        const body = {
            products: this.state.cart.products,
            totalPrice: this.calculateTotal(this.state.cart.products),
            paymentMethod: this.state.paymentMethod
        };

        await fetch('http://localhost:30007/api/purchases', {
            method: "POST", body: JSON.stringify(body), headers: {
                'Accept': "application/json, text/plain, */*",
                'Content-Type': "application/json"
            }
        })
            .then(async response => {
                console.log('status code: ' + response.status)
            })
            .catch(console.log);

        const purchaseCompletedEvent = new CustomEvent("purchase-completed");
        dispatchEvent(purchaseCompletedEvent);
    }

    render() {
        console.log("start render");

        return (
            <CheckoutStyle>
                <h1>Checkout</h1>
                {this.state.cart.products?.length === 0 ? <p>No items in cart.</p> : null}
                {this.state.cart.products?.map(item => (
                    <CheckoutItemStyle>
                        <div>
                            <h3>{item.title}</h3>
                            <div className="information">
                                <p>Price: ${item.price}</p>
                                <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
                            </div>
                            <div className="buttons">
                                <p>Amount: {item.amount}</p>
                            </div>
                        </div>
                        <img src={item.image} alt={item.title} />
                    </CheckoutItemStyle>
                ))}
                <h2>Total: ${this.calculateTotal(this.state.cart.products).toFixed(2)}</h2>

                <div>
                    <FormControl component="fieldset">
                        <h3>Payment Method</h3>
                        <RadioGroup aria-label="paymentmethod" name="paymentmethod1" value={this.state.paymentMethod} onChange={this.handleChange}>
                            <FormControlLabel value="Credit Card" control={<Radio />} label="Credit Card" />
                            <FormControlLabel value="Cash" control={<Radio />} label="Cash" />
                            <FormControlLabel value="App" control={<Radio />} label="App" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <Separator />
                <div>
                    <Button color="primary" disabled={this.state.cart.products.length === 0 ? true : false } variant="contained" onClick={this.onClickConfirmButton} component={Link} to="/">
                        Confirm
                    </Button>
                </div>
            </CheckoutStyle>
        );
    }

}

export default CheckoutItems;