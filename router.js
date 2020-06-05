import React from "react";
import { useRoutes } from "hookrouter";
import Home from "./components/Home";
import About from "./components/About";
import NotFoundPage from "./components/NotFoundPage";
import Layout from "./components/Layout";

function Router() {
  const routes = {
    "/": () => (
      <Layout>
        <Home />
      </Layout>
    ),
    "/about": () => (
      <Layout>
        <About />
      </Layout>
    ),
    // '/products/:id': ({id}) => <ProductDetails id={id} />
  };

  const routeResult = useRoutes(routes);

  return routeResult || <NotFoundPage />;
}
export default Router;
