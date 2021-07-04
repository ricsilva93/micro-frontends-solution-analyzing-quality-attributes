import * as React from "react";
import {render, screen, waitFor} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks()
import fetchMock from 'jest-fetch-mock';
import PurchaseHistoryTable from "./PurchaseHistoryTable";

beforeEach(() => {
    fetchMock.resetMocks();
    jest.clearAllMocks();
});

afterEach(
    () =>{
        jest.clearAllMocks();
    }
);

describe("purchase history tests",() =>{

    it("purchase history table renders correctly without data",()=>{
        fetchMock.mockResponseOnce(JSON.stringify([]))
        const { debug } = render(<PurchaseHistoryTable />);
        debug();

        expect(screen.queryByText('Your Purchase History is empty.')).toBeInTheDocument();
    })

    it("purchase history table renders correctly with data",async ()=>{


        window.fetch = jest.fn().mockImplementation(() => {
            return new Promise((resolve, reject) => {
                resolve({
                    status: 200,
                    ok: true,
                    json: () => new Promise((resolve, reject) => {
                        resolve([
                            {
                                products: [
                                    {
                                        id: 1,
                                        category: "fashion",
                                        description: "A cool t-shirt.",
                                        image: "test.jpg",
                                        price: "109.95",
                                        title: "t-shirt",
                                        amount: "1"
                                    },
                                ],
                                paymentMethod: "visa",
                                totalPrice: "132.25"
                            }
                        ]
                        );
                    })
                });
            });
        })

        const { queryByText } = render(<PurchaseHistoryTable />);

        await waitFor(()=>
            expect(queryByText(/t-shirt/i)).toBeInTheDocument());
    })
})
