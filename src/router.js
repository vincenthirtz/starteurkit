import React from "react";
import { useRoutes } from "hookrouter";
import Home from "./components/Home";
import About from "./components/About/About";
import Features from "./components/Features";
import Contact from "./components/Contact";
import NotFoundPage from "./components/NotFoundPage";
import Layout from "./components/Layout/Layout";

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
