import React, { useContext } from "react";
import { useRoutes, navigate } from "hookrouter";
import Home from "./components/Home";
import About from "./components/About/About";
import Features from "./components/Features";
import Contact from "./components/Contact";
import NotFoundPage from "./components/NotFoundPage";
import { ThemeContext } from "./context";
import ThemeDefault from "./components/themes/ThemeDefault";
import ThemeDashBoard from "./components/themes/ThemeDashBoard";
import ThemeOnePage from "./components/themes/ThemeOnePage";
import ThemeModal from "./components/themes/ThemeModal";
import "./style/app.scss";

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
    "/": () => <ThemeOnePage />,
    "/404": () => <NotFoundPage />,
  };

  const routesModal = {
    "/": () => <ThemeModal />,
    "/404": () => <NotFoundPage />,
  };

  const routesDashBoard = {
    "/": () => <ThemeDashBoard />,
    "/404": () => <NotFoundPage />,
  };

  const switchRoute = () => {
    switch (theme) {
      case "default":
        return routesDefault;
      case "modal":
        return routesModal;
      case "onepage":
        return routesOnepage;
      case "dashboard":
        return routesDashBoard;
      default:
        return null;
    }
  };

  const routeResult = useRoutes(switchRoute());

  return routeResult || navigate("/404");
}
export default Router;
