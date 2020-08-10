// import React from  'react';
import { atom } from "recoil";
import cofeeIcon from "../../img/cofee.png";

const articleTitleState = atom({
  key: "articleContent",
  default: {
    titre: "Le café c'est bon !",
    content: '" oui! " : someone in the morning ',
    contentImage: cofeeIcon,
  },
});

export default articleTitleState;
