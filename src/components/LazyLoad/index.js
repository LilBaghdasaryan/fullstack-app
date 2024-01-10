import { Suspense } from "react"

const LazyLoad = ({ component: Component, loader: Loader, ...rest }) => (
    <>
        <Suspense fallback={<h2>Loading</h2>}>
            <Component {...rest} />
        </Suspense>
    </>
);

export default LazyLoad;