import {Routes} from "./Routes";
import {render, screen} from "@testing-library/react";
import React from "react";
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom/extend-expect';

describe("routes tests",() =>{

    jest.mock('./Catalog/Catalog', () => {
            return jest.fn().mockImplementation(() =>
                <div>catalog</div>);
        }
    );

    jest.mock('./Navbar/Navbar', () => ({
        __esModule: true,
        namedExport: jest.fn(),
        default : jest.fn()
    }));

    it("landing on catalog",()=>{
        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes />
            </MemoryRouter>);
        expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
    })

    it("landing on Checkout page",()=>{
        render(
            <MemoryRouter initialEntries={['/checkout']}>
                <Routes />
            </MemoryRouter>);
        expect(screen.getByText(/Checkout/i)).toBeInTheDocument();
    })
    it("landing on purchase history page",()=>{
        render(
            <MemoryRouter initialEntries={['/purchase-history']}>
                <Routes />
            </MemoryRouter>);
        expect(screen.getByText(/Purchases/i)).toBeInTheDocument();
    })
})
