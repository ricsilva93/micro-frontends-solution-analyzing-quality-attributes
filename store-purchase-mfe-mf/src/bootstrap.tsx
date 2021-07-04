/* istanbul ignore file */
import * as React from "react";
import * as ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { CheckoutItems } from "./Components/CheckoutItems";
import { PurchaseHistoryTable } from "./Components/PurchaseHistoryTable";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { ButtonGroup, Button } from "@material-ui/core";

const client = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={client}>
    <p> Purchases sandbox </p>
    <BrowserRouter>
    <ButtonGroup color="primary" variant="contained">
      <Button component={Link} to="/">
        Checkout
        </Button>
      <Button component={Link} to="/home">
        Home Page test
        </Button>
      <Button component={Link} to="/purchase-history">
        Purchase History
        </Button>
    </ButtonGroup>
      <Switch>
        <Route exact path="/">
          <CheckoutItems />
        </Route>
        <Route path="/purchase-history">
          <PurchaseHistoryTable />
        </Route>
        <Route path="/home">
          <p>Home page</p>
        </Route>
      </Switch>
    </BrowserRouter>
  </QueryClientProvider>,
  document.getElementById('root')
);
