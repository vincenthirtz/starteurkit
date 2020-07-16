import React from "react";
import { useRoutes } from "hookrouter";
import Home from "./components/Home";
import About from "./components/About/About";
import Features from "./components/Features";
import Contact from "./components/Contact";
import NotFoundPage from "./components/NotFoundPage";

function Router() {
  const routes = {
    "/": () => <Home />,
    "/about": () => <About />,
    "/features": () => <Features />,
    "/contact": () => <Contact />,
    // '/products/:id': ({id}) => <ProductDetails id={id} />
  };

  const routeResult = useRoutes(routes);

  return routeResult || <NotFoundPage />;
}
export default Router;
