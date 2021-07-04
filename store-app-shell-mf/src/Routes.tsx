import Catalog from "./Catalog/Catalog";
import Purchases from "./Purchases/Purchases";
import Checkout from "./Checkout/Checkout";
import * as React from "react";
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";

export const Routes = () => {
    return(
        <Switch>
            <Route exact path="/">
                <Catalog />
            </Route>
            <Route path="/purchase-history">
                <Purchases />
            </Route>
            <Route path="/checkout">
                <Checkout />
            </Route>
            <Route default >
                <Redirect to="/" />
            </Route>
        </Switch>
    )
};