import * as React from 'react';

import Grid from '@material-ui/core/Grid';

import { Wrapper } from '../App.styles';
import Item from "./Item/Item";

export type ItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}


interface IProps {
  products: ItemType[]
}

export class Catalog extends React.Component {

  public constructor(props: IProps) {
    super(props);
  }

  public state = {
    products: [] as ItemType[],
  };

  async componentDidMount() {
    if (this.state.products.length === 0) {
      console.log("fire get products");
      const response = await fetch('http://localhost:30005/api/products');
      const data = await response.json();
      this.setState({ products: data })
    }
  }

  public handleAddToCart(clickedItem: ItemType): void {
    let ce = new CustomEvent("product-added-to-cart", {
      detail: { clickedItem },
    });
    console.log(ce);
    dispatchEvent(ce);
  };

  render() {

    return (
      <Wrapper>
        <Grid container spacing={3}>
          {this.state.products?.map(item => (
            <Grid item key={item.id} xs={12} sm={4}>
              <Item item={item} handleAddToCart={this.handleAddToCart} />
            </Grid>
          ))}
        </Grid>
      </Wrapper>
    );
  }
}

export default Catalog;