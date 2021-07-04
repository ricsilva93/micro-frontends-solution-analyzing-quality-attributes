import * as React from "react";
import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import {enableFetchMocks} from 'jest-fetch-mock'
enableFetchMocks()
import fetchMock from 'jest-fetch-mock';
import CheckoutItems from "./CheckoutItems";
import {HashRouter} from "react-router-dom";

describe("purchase history tests",() =>{
    beforeEach(() => {
      fetchMock.resetMocks();
      jest.clearAllMocks();
    });

    afterEach(
        () =>{
            jest.clearAllMocks();
        }
    );

    it("checkout renders correctly with data",async ()=>{
        window.fetch = jest.fn().mockImplementation(() => {
            return new Promise((resolve, reject) => {
                resolve({
                    status: 200,
                    ok: true,
                    json: () => new Promise((resolve, reject) => {
                        resolve({products:[{id: 1,
                                category: "fashion",
                                description: "A cool t-shirt.",
                                image: "test.jpg",
                                price: "29.3",
                                title: "t-shirt",
                                amount: "2"}]});
                    })
                });
            });
        })

        const {queryByText} = render(
            <HashRouter>
                <CheckoutItems />
            </HashRouter>
        );

        await waitFor(()=> expect(queryByText(/t-shirt/i)).toBeInTheDocument());
    });

    it("checkout renders correctly",()=>{
        fetchMock.mockResponseOnce(JSON.stringify([]))
        render(
        <HashRouter>
            <CheckoutItems />
        </HashRouter>
        );

        expect(screen.queryByText('Checkout')).toBeInTheDocument();
    })
})
