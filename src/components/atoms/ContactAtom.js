import { atom } from "recoil";

const contactContentState = atom({
  key: "contactContent",
  default: {
    nom: "Smith",
    prenom: "John",
    contact: "pas trop",
  },
  userTwo: {
    nom: "fillou",
    prenom: "nbeof",
    contact: "meh",
  },
});

export default contactContentState;
