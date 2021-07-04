import * as React from "react";

const RemotePurchases = React.lazy(() => import("Purchases/PurchaseHistoryTable"));

const Purchases = () => {
    return(
        <React.Suspense fallback="Loading Purchases">
            <RemotePurchases />
        </React.Suspense>
    )
}

export default Purchases;