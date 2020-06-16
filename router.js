import React from "react";
import { useRoutes } from "hookrouter";
import Home from "./src/components/Home";
import About from "./src/components/About/About";
import Features from "./src/components/Features";
import Contact from "./src/components/Contact";
import NotFoundPage from "./src/components/NotFoundPage";
import Layout from "./src/components/Layout/Layout";

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
    "/features": () => (
      <Layout>
        <Features />
      </Layout>
    ),
    "/contact": () => (
      <Layout>
        <Contact />
      </Layout>
    ),
    // '/products/:id': ({id}) => <ProductDetails id={id} />
  };

  const routeResult = useRoutes(routes);

  return (
    routeResult || (
      <Layout>
        <NotFoundPage />
      </Layout>
    )
  );
}
export default Router;
