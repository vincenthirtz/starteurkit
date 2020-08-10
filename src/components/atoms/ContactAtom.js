import { atom } from "recoil";

const contactContentState = atom({
  key: "contactContent",

  default: {
    userOne: {
      nom: "Smith",
      prenom: "John",
      contact: "js@email.com",
    },
    userTwo: {
      nom: "Fillou",
      prenom: "Nbeo",
      contact: "nf@email.com",
    },
    userThree: {
      nom: "Bigoud",
      prenom: "Johnny",
      contact: "jbg@email.com",
    },
    userFour: {
      nom: "Oscour",
      prenom: "Patriiiiiiiiick",
      contact: "po@email.com",
    },
  },
});

export default contactContentState;
