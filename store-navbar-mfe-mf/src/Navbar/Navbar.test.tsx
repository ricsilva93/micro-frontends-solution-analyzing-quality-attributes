import * as React from "react";
import {screen} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

import {
    BrowserRouter as Router,
} from 'react-router-dom'
import {render as rtlRender} from '@testing-library/react'
import Navbar from "./Navbar";

const render = (ui, {route = '/checkout'} = {}) => {
    window.history.pushState({}, 'Test page', route)

    return rtlRender(ui, {wrapper: Router})
}

describe("Navbar tests",() =>{

    it("navbar will load history button and Cart placeholder",async ()=>{
        render(<Navbar />);

        expect(screen.getByText(/History/i)).toBeInTheDocument();
        expect(screen.getByText(/Loading Cart/i)).toBeInTheDocument();
    });
})


