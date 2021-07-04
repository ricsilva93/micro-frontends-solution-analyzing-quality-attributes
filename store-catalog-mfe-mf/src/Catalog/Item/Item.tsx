import { ItemType } from "../Catalog";

import {Wrapper} from "./Item.style";

import React from "react";
import { IconButton } from "@material-ui/core";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

export interface ItemProps {
    item: ItemType;
    handleAddToCart: (clickedItem: ItemType) => void;
}

export class Item extends React.Component<ItemProps, {}>{

    render(){
        const ItemProps = this.props;

        return(
            <Wrapper>
            <img src={ItemProps.item.image} alt={ItemProps.item.title} height="400px" width="800px"/>
            <div>
                <h3>{ItemProps.item.title}</h3>
                <p>{ItemProps.item.description}</p>
                <h3>${ItemProps.item.price}</h3>
            </div>
            <IconButton
                    color="inherit"
                    onClick={()=>ItemProps.handleAddToCart(ItemProps.item)}
                >
                        <AddShoppingCartIcon />
                        Buy
        </IconButton>
        </Wrapper>
        );
    }
}

export default Item;