import * as React from "react";
import * as ReactDOM from "react-dom";
import CartComponent from "./Components/CartComponent";
import {Box} from "@material-ui/core";
import { ButtonWrapper } from "./Components/CartButton.styles";


ReactDOM.render(
   <ButtonWrapper>
      <CartComponent />
    </ButtonWrapper>,
  document.getElementById('root')
);
