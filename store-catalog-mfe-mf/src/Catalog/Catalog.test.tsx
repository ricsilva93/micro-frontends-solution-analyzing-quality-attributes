import React from "react";
import { render, screen} from "@testing-library/react";
import { ItemType } from "./Catalog";
import Catalog from "./Catalog";

import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks()
import fetchMock from 'jest-fetch-mock';

describe("catalog tests",() =>{
    beforeEach(() => {
        fetchMock.resetMocks();
      });

    let mockItem1 = {
        id: 1,
        category: "fashion",
        description: "A cool t-shirt.",
        image: "test.jpg",
        price: 29.0,
        title: "t-shirt",
        amount: 2
    } as ItemType;

    let mockItem2 = {
        id: 2,
        category: "fashion",
        description: "A black polo shirt.",
        image: "test2.jpg",
        price: 32.0,
        title: "Polo Shirt",
        amount: 2
    } as ItemType;

    let props = {
        products:[mockItem1]
    };

    let mockHandleAddToCart = jest.fn((Item: ItemType) => {
        console.log("test");
    })

    let mockResponse = [
        mockItem1, mockItem2
    ] as ItemType[];

    let container;

    beforeEach(() => {
        container = new Catalog(props);
    });

    it("catalog renders correctly",()=>{
        fetchMock.mockResponseOnce(JSON.stringify(mockResponse))
        render(<Catalog />);
        let item = screen.queryByText('t-shirt');
        expect(item).toBeDefined();
    })

    it("catalog is empty when no products",()=>{
        fetchMock.mockResponseOnce(JSON.stringify([]))
        render(<Catalog />);

        expect(screen.queryByText('t-shirt')).toBeNull();
    })

    it("handleAddToCart dispatch event when called",()=>{
        let dispatchSpy = jest.spyOn(window, 'dispatchEvent');

        container.handleAddToCart(mockItem1);

        expect(dispatchSpy).toHaveBeenCalledTimes(1);
    })
})
