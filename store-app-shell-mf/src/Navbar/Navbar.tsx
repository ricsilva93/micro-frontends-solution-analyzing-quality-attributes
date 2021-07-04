import * as React from "react";

const RemoteNavbar = React.lazy(() => import("Navbar/Navbar"));

const Navbar = () => {
    return(
        <React.Suspense fallback="Loading Navbar">
            <RemoteNavbar />
        </React.Suspense>
    )
}

export default Navbar;