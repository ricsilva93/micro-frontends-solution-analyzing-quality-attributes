import * as React from "react";

const RemoteCheckout = React.lazy(() => import("Purchases/CheckoutItems"));

const Checkout = () => {
    return(
        <React.Suspense fallback="Loading Checkout">
            <RemoteCheckout />
        </React.Suspense>
    )
}

export default Checkout;