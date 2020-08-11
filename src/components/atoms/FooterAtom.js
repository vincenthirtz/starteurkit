import { atom } from "recoil";

const footerContentState = atom({
  key: "footerContent",
  default: {
    legal: {
      title: "Mentions légales",
      elmt1: "ici il y aurait des mention légales ... ça serait très chouette",
    },
    Social: {
      title: "Social",
      elmt1: "Twitter",
      linkElmt1: "https://twitter.com/alukaard76",
      elmt2: "GitHub",
      linkElmt2: "https://github.com/vincenthirtz",
      elmt3: "Discord",
      linkElmt3: "https://discord.com/invite/9UuNaV",
    },
    tech: {
      title: "Tech",
      elmt1: "react",
      linkElmt1: "https://reactjs.org/",
      elmt2: "parcel",
      linkElmt2: "https://parceljs.org/",
      elmt3: "node",
      linkElmt3: "https://nodejs.org/en/",
      elmt4: "recoil",
      linkElmt4: "https://recoiljs.org/",
    },
    contact: {
      title: "Contact",
      elmt1: "contact.oskour@gmail.com",
    },
  },
});

export default footerContentState;
