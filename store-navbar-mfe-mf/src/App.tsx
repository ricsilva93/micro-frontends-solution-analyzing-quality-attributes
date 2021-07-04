import * as React from "react";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";

import Navbar from "./Navbar/Navbar";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <p>Welcome to sandbox!</p>
            <Switch>
                <Route exact path="/">
                    <p>Home page</p>
                </Route>
                <Route path="/purchase-history">
                    <p>Purchase History page</p>
                </Route>
                <Route path="/home">
                    <p>Home page</p>
                </Route>
            </Switch>
        </BrowserRouter>);

}


export default App;