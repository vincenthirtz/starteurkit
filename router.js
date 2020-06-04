import React from 'react'
import Home from './components/Home'
import About from './components/About'
import NotFoundPage from './components/NotFoundPage'
import { useRoutes } from 'hookrouter';

function Router() {
    const routes = {
        '/': () => <Home />,
        '/about': () => <About />,
        // '/products/:id': ({id}) => <ProductDetails id={id} />
    };

    const routeResult = useRoutes(routes);

    return routeResult || <NotFoundPage />;

}
export default Router