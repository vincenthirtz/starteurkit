// import React from  'react';
import { atom } from "recoil";
import cofeeIcon from "../../img/cofee.png";

const articleTitleState = atom({
  key: "articleContent",
  default: {
    titre: "le café ça troue le cul",
    content: "oui oui beaucoup",
    contentImage: cofeeIcon,
  },
});

export default articleTitleState;
