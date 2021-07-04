import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import Item from "./Item";
import { ItemType } from "../Catalog";

test("item renders correctly",()=>{
    let mockItem = {
        id: 1,
        category: "fashion",
        description: "A cool t-shirt.",
        image: "test.jpg",
        price: 29.0,
        title: "t-shirt",
        amount: 2
    } as ItemType;

    let mockHandleAddToCart = jest.fn((Item: ItemType) => {
        console.log("test");
    })

    render(<Item item={mockItem} handleAddToCart={mockHandleAddToCart}/>);
    let item = screen.queryByText('t-shirt');
    expect(item).toBeDefined();
})

test("item should dispatch event when onclick ",()=>{
    let mockItem = {
        id: 1,
        category: "fashion",
        description: "A cool t-shirt.",
        image: "test.jpg",
        price: 29.0,
        title: "t-shirt",
        amount: 2
    } as ItemType;

    const mockHandleAddToCart = jest.fn()

    render(<Item item={mockItem} handleAddToCart={mockHandleAddToCart}/>);
    fireEvent.click(screen.getByText("Buy"));
    expect(mockHandleAddToCart).toHaveBeenCalledTimes(1);
})