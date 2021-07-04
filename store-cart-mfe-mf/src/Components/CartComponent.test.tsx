import * as React from "react";
import {fireEvent, render, screen} from "@testing-library/react";

import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks()
import { CartItemType } from "../CartItem/CartItem";

import '@testing-library/jest-dom/extend-expect';
import CartComponent from "./CartComponent";
import {HashRouter} from "react-router-dom";

describe("CartComponent tests",() =>{


    let clickedItem = {
        id: 1,
        category: "fashion",
        description: "A t-shirt",
        image: "",
        price: 30.0,
        title: "t-shirt",
        amount: 1
    } as CartItemType;

    let clickedItem2 = {
        id: 2,
        category: "fashion",
        description: "A black polo shirt.",
        image: "test2.jpg",
        price: 30.0,
        title: "Polo Shirt",
        amount: 2
    } as CartItemType;

    let mockResponse = [
        clickedItem, clickedItem2
    ] as CartItemType[];

    let props = {
        cartItems: mockResponse,
        isCartOpen: true
    };

    let container;

    beforeEach(() => {
        document.body.innerHTML = "";
        container = new CartComponent(props);
        fetchMock.resetMocks();
    });
    it("Cart products update to 1 when product-added-to-cart event is listened",()=>{
        let dispatchSpy = jest.spyOn(CartComponent.prototype, 'updateCart');
        render(<CartComponent />);
        expect(screen.queryByText('0')).toBeInTheDocument();
        fireEvent(window, new CustomEvent('product-added-to-cart', { detail: clickedItem }));

        expect(dispatchSpy).toHaveBeenCalledTimes(1);
        expect(screen.queryByText('1')).toBeInTheDocument();
    })

    it("Cart products update to 0 when purchase-completed event is listened",()=>{
        render(<CartComponent />);
        expect(screen.queryByText('0')).toBeInTheDocument();
        fireEvent(window, new CustomEvent('purchase-completed'));

        expect(screen.queryByText('0')).toBeInTheDocument();
    })

    it("drawer opens when click cart button",()=>{
        render(
            <CartComponent />
        );
        fireEvent.click(screen.getByRole('button'))
        expect(screen.queryByText('No items in cart.')).toBeInTheDocument();
    })

    it("drawer opens when click cart button and show checkout items",()=>{
        render(
            <HashRouter>
                <CartComponent />
            </ HashRouter>
        );
        fireEvent(window, new CustomEvent('product-added-to-cart', { detail: clickedItem }));
        fireEvent.click(screen.getByRole('button'))

        expect(screen.queryByText('Checkout')).toBeInTheDocument();
        expect(screen.queryByText('+')).toBeInTheDocument();
        expect(screen.queryByText('-')).toBeInTheDocument();
    })

    it("product amount is 2 when adding same product",async ()=>{
        const { container, debug } = render(
            <HashRouter>
                <CartComponent />
            </ HashRouter>
        );
        fireEvent(window, new CustomEvent('product-added-to-cart', { detail: { clickedItem: clickedItem } }));

        fireEvent.click(screen.queryByText('Cart'))
        fireEvent(window, new CustomEvent('product-added-to-cart', { detail: { clickedItem: clickedItem } }));
        debug();

        expect(container
            .getElementsByClassName('MuiBadge-badge MuiBadge-anchorOriginTopRightRectangle MuiBadge-colorError')
            .item(0).textContent)
            .toBe("2");
    })

    it("returns 1 item from getState if product is added for the first time",async ()=>{
        let result = await container.getState([], clickedItem);

        expect(result[0].title).toBe(clickedItem.title);
    })

    it("returns amount=2 same item from getState if product is added for the first time",async ()=>{
        let result = await container.getState([clickedItem], clickedItem);

        expect(result[0].title).toBe(clickedItem.title);
        expect(result[0].amount).toBe(2);
    })

    it("returns both items if a different product is added afterwards",async ()=>{
        let result = await container.getState([clickedItem], clickedItem2);

        expect(result[0].title).toBe(clickedItem.title);
        expect(result[0].amount).toBe(1);
        expect(result[1].title).toBe(clickedItem2.title);
        expect(result[1].amount).toBe(1);
    })
})
