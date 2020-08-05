import React, { useState } from "react";
import ReactDOM from "react-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { ThemeContext } from "./context";
import { ColorThemeContext } from "./ColorContext";
import Router from "./router";
import Layout from "./components/Layout/Layout";
// import ModalHook from "./components/ModalHook";

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
        Responsive: "Responsive",
        ResponsiveDescription:
          "Display of any page on a site automatically adapts to the screen size of the terminal that reads it.",
        "404": "Error 404",
        FastDescription:
          "In addition to ultra-fast deployment on a hosting service like Netlify, the Parcel library ensures an equally comfortable development.",
        Customizable: "Customizable",
        CustomizableDescription:
          "With SASS, it's never been easier to edit a site. We also have preconceived themes and colors.",
        Internationalization: "Internationalization",
        InternationalizationDescription:
          "We embed an easy-to-use language system so that your site speaks to everyone.",
        ReadyToUse: "Ready to use",
        ReadyToUseDescription: "An .env file to create and enjoy!",
        Exportable: "Exportable",
        ExportableDescription:
          "Fork or pull request, inspiration or copy. Come participate in the project as you see fit.",
        UniversalAccess: "Universal Access",
        UniversalAccessDescription:
          "No linguistic, technological or physical barriers. Any developer will manage on this project.",
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
        Responsive: "Responsive",
        ResponsiveDescription:
          "L’affichage d’une quelconque page d’un site s’adapte de façon automatique à la taille de l’écran du terminal qui le lit.",
        "404": "Erreur 404",
        FastDescription:
          "En plus du déploiement ultra rapide sur un service d'hébergement comme Netlify, la librairie Parcel assure un développement tout aussi confortable.",
        Customizable: "Personnalisable",
        CustomizableDescription:
          "Avec SASS, il n'a jamais été aussi facile de modifier un site. Nous avons aussi des thèmes et couleurs préconcus.",
        Internationalization: "Internationalisation",
        InternationalizationDescription:
          "Nous embarquons un système de langues simple à utiliser pour que votre site parle à tout le monde.",
        ReadyToUse: "Prêt à coder",
        ReadyToUseDescription: "Un fichier .env à créer et c'est parti !",
        Exportable: "Exportable",
        ExportableDescription:
          "Fork ou pull request, inspiration ou copie. Venez participer au projet comme bon vous semble.",
        UniversalAccess: "Accès Universel",
        UniversalAccessDescription:
          "Aucune barrière linguistique, technologique ou physique. N'importe quel développeur se sébrouillera sur ce projet.",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

const AppComponent = () => {
  const [theme] = useState(process.env.THEME);
  const [color] = useState(`theme-${process.env.COLOR}`);

  return (
    <div className={color}>
      <ThemeContext.Provider value={theme}>
        <ColorThemeContext.Provider value={color}>
          <Router>
            <Layout />
          </Router>
        </ColorThemeContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
};

const App = document.getElementById("app");

export default ReactDOM.render(<AppComponent />, App);
