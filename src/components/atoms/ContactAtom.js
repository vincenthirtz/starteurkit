import { atom } from "recoil";

const contactContentState = atom({
  key: "contactContent",

  default: {
    userOne: {
      image:
        "https://cdn-media.rtl.fr/online/image/2019/0918/7798350993_patrick-balkany-a-la-mairie-de-levallois-perret.jpg",
      name: "Roi des roublards",
      firstname: "Patrick",
      contact: "levallois@email.com",
    },
    userTwo: {
      image: "https://img.youtube.com/vi/JO4hvtY3SRc/0.jpg",
      name: "Fillou",
      firstname: "Nbeo",
      contact: "nf@email.com",
    },
    userThree: {
      image: "https://images.radio-canada.ca/q_auto,w_1250/v1/ici-info/16x9/chuck-berry-deces-concert-rock-2.jpg",
      name: "Bigoud",
      firstname: "Johnny",
      contact: "jbg@email.com",
    },
    userFour: {
      image: "https://cdn-techno.konbini.com/fr/images/files/2020/01/speedonsvert.jpg",
      name: "Monsieur",
      firstname: "Vieux",
      contact: "po@email.com",
    },
  },
});

export default contactContentState;
