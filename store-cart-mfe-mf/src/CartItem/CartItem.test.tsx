import * as React from "react";
import {fireEvent, render, screen} from "@testing-library/react";

import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks()
import fetchMock from 'jest-fetch-mock';
import CartItem, { CartItemType } from "../CartItem/CartItem";

import '@testing-library/jest-dom/extend-expect';

describe("cartItem tests",() =>{
    beforeEach(() => {
        fetchMock.resetMocks();
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

    let mockAddToCart = jest.fn();

    let mockRemoveFromCart = jest.fn();

    it("CartItem renders correctly",()=>{
        fetchMock.mockResponseOnce(JSON.stringify([]))
        render(<CartItem
            item={mockItem1}
            addToCart={mockAddToCart}
            removeFromCart={mockRemoveFromCart}
        />);

        expect(screen.queryByText('t-shirt')).toBeInTheDocument();
        expect(screen.queryByText('+')).toBeInTheDocument();
        expect(screen.queryByText('-')).toBeInTheDocument();
    })

    it("OnClick '+' button fires addToCart method",()=>{
        fetchMock.mockResponseOnce(JSON.stringify([]))
        render(<CartItem
            item={mockItem1}
            addToCart={mockAddToCart}
            removeFromCart={mockRemoveFromCart}
        />);

        fireEvent.click(screen.getByText('+'))
        expect(mockAddToCart).toHaveBeenCalledTimes(1);
    })

    it("OnClick '-' button fires removeFromCart method",()=>{
        fetchMock.mockResponseOnce(JSON.stringify([]))
        render(<CartItem
            item={mockItem1}
            addToCart={mockAddToCart}
            removeFromCart={mockRemoveFromCart}
        />);

        fireEvent.click(screen.getByText('-'))
        expect(mockAddToCart).toHaveBeenCalledTimes(1);
    })
})
