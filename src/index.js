import React from "react";
import ReactDOM from "react-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { ThemeContext } from "./context";
import Router from "./router";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "For students and developers": "For students and developers",
        Home: "Home",
        Features: "Features",
        About: "About",
        Contact: "Contact",
        "Do you need a ready to use project": "Do you need a ready to use project? Starteurkit is for you!",
        "Why choose this kit among the others": "Why choose this kit among the others?",
        "It does not pretend to be in the best":
          "It does not pretend to be in the best react kits but it is rather practical and up to date",
        "Can we participate in the project": "Can we participate in the project?",
        "Anyone can participate by offering pull requests":
          "Anyone can participate by offering pull requests. Let's discuss together the future of the project on",
        Social: "Social",
        Fast: "Fast",
        Tech: "Tech",
        Simple: "Simple",
        "Starting a project has never been easier": "Starting a project has never been easier",
        "Focus only on your application code": "Focus only on your application code",
        Sitemap: "Sitemap",
        "Terms and Conditions": "Terms and Conditions",
        "Privacy Policy": "Privacy Policy",
        Subtitle1: "React Starter Kit with:",
        Routing_Hook: "Routing Hook",
        Parcel: "Parcel",
        Sass: "Sass",
        Eslint: "Eslint",
        Prettier: "Prettier",
        Pre_commit_Hook: "Pre-commit Hook",
        "404": "Error 404",
      },
    },
    fr: {
      translation: {
        "For students and developers": "Pour les étudiants et développeurs",
        Home: "Accueil",
        Features: "Caractéristiques",
        About: "A propos",
        Contact: "Contact",
        "Do you need a ready to use project":
          "Vous avez besoin d'un projet prêt à l'emploi? Starteurkit est fait pour vous!",
        "Why choose this kit among the others": "Pourquoi choisir ce starterkit parmi les autres?",
        "It does not pretend to be in the best":
          "Il ne prétend pas faire partie des meilleurs starterkits mais il est plutôt pratique et à jour",
        "Can we participate in the project": "Pouvons-nous participer au projet?",
        "Anyone can participate by offering pull requests":
          "Tout le monde peut participer en proposant des pull request. Discutons ensemble de l'avenir du projet sur",
        Social: "Social",
        Fast: "Rapide",
        Tech: "Tech",
        Simple: "Simple",
        "Starting a project has never been easier": "Démarrer un projet n'a jamais été aussi simple",
        "Focus only on your application code": "Concentrez-vous uniquement sur le code de votre application",
        Sitemap: "Sitemap",
        "Terms and Conditions": "Termes et conditions",
        "Privacy Policy": "Politique de confidentialité",
        Subtitle1: "React Starter Kit avec:",
        Routing_Hook: "Routing Hook ",
        Parcel: "Parcel",
        Sass: "Sass",
        Eslint: "Eslint",
        Prettier: "Prettier",
        Pre_commit_Hook: "Pre-commit Hook",
        "404": "Erreur 404",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { theme: "default" };
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <Router />
      </ThemeContext.Provider>
    );
  }
}

const App = document.getElementById("app");

ReactDOM.render(<AppComponent />, App);
