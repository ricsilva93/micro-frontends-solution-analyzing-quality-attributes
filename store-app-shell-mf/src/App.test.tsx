import * as React from "react";
import {screen, waitFor} from "@testing-library/react";
import App from "./App";
import '@testing-library/jest-dom/extend-expect';

import {
    BrowserRouter as Router,
} from 'react-router-dom'
import {render as rtlRender} from '@testing-library/react'

const render = (ui, {route = '/checkout'} = {}) => {
    window.history.pushState({}, 'Test page', route)

    return rtlRender(ui, {wrapper: Router})
}

describe("appshell tests",() =>{
    jest.mock('./Navbar/Navbar', () => {
        const ComponentToMock = () => <div>Navbar</div>;
        return ComponentToMock;
    });

    it("main page will load navbar and catalog",async ()=>{

        render(<App />);

        await waitFor(()=> {
            expect(screen.getByText(/Navbar/i)).toBeInTheDocument()
            expect(screen.getByText(/Catalog/i)).toBeInTheDocument()
        });
    });
})


