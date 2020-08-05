import React, { useContext } from "react";
import { useRoutes, navigate } from "hookrouter";
import Home from "./components/Home";
import About from "./components/About/About";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Layout from "./components/Layout/Layout";
import NotFoundPage from "./components/NotFoundPage";
import { ThemeContext } from "./context";
import ThemeDefault from "./components/themes/ThemeDefault";

function Router() {
  const theme = useContext(ThemeContext);
  const routesDefault = {
    "/": () => (
      <ThemeDefault>
        <Home />
      </ThemeDefault>
    ),
    "/about": () => (
      <ThemeDefault>
        <About />
      </ThemeDefault>
    ),
    "/features": () => (
      <ThemeDefault>
        <Features />
      </ThemeDefault>
    ),
    "/contact": () => (
      <ThemeDefault>
        <Contact />
      </ThemeDefault>
    ),
    "/404": () => (
      <ThemeDefault>
        <NotFoundPage />
      </ThemeDefault>
    ),
    // '/products/:id': ({id}) => <ProductDetails id={id} />
  };

  const routesOnepage = {
    "/": () => <Layout />,
    "/404": () => <NotFoundPage />,
  };

  const switchRoute = () => {
    switch (theme) {
      case "default":
        return routesDefault;
      case "modal":
        return routesOnepage;
      case "onepage":
        return routesOnepage;
      case "dashboard":
        return routesOnepage;
      default:
        return null;
    }
  };

  const routeResult = useRoutes(switchRoute());

  return routeResult || navigate("/404");
}
export default Router;
