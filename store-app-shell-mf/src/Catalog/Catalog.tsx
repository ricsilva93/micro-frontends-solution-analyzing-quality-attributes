import * as React from "react";

const RemoteCatalog = React.lazy(() => import("Catalog/Catalog"));

const Catalog = () => {
    return(
        <React.Suspense fallback="Loading Catalog">
            <RemoteCatalog />
        </React.Suspense>
    )
}

export default Catalog;