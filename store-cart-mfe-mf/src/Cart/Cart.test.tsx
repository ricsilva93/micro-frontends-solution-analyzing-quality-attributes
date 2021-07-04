import * as React from "react";
import { render, screen} from "@testing-library/react";

import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks()
import fetchMock from 'jest-fetch-mock';
import { CartItemType } from "../CartItem/CartItem";
import { Cart } from "./Cart";
import '@testing-library/jest-dom/extend-expect';

describe("cart tests",() =>{
    beforeEach(() => {
        fetchMock.resetMocks();
        container = new Cart(props);
      });

    let mockItem1 = {
        id: 1,
        category: "fashion",
        description: "A cool t-shirt.",
        image: "test.jpg",
        price: 30.0,
        title: "t-shirt",
        amount: 1
    } as CartItemType;

    let mockItem2 = {
        id: 2,
        category: "fashion",
        description: "A black polo shirt.",
        image: "test2.jpg",
        price: 30.0,
        title: "Polo Shirt",
        amount: 1
    } as CartItemType;

    let props = {
        cartItems:[mockItem1],
        addToCart: jest.fn(),
        removeFromCart: jest.fn()
    };

    let mockResponse = [
        mockItem1, mockItem2
    ] as CartItemType[];

    let container;

    it("total price is 60.0 if both items on cart cost 30.0",()=>{
        let result = container.calculateTotalPrice(mockResponse);
        expect(result).toBe(60.0);
    })


    it("Cart renders correctly",()=>{
        fetchMock.mockResponseOnce(JSON.stringify([]))
        render(<Cart
            cartItems={mockResponse}
            addToCart={jest.fn()}
            removeFromCart={jest.fn()}
        />);
        expect(screen.queryByText('t-shirt')).toBeInTheDocument();
    })
})
