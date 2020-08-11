import React from "react";
import { useRecoilState } from "recoil";
import contactContentState from "../../../atoms/ContactAtom";

const ContactDash = () => {
  const [contactContent] = useRecoilState(contactContentState);

  const arrayTransformer = Object.values(contactContent);

  const usersStatus = [];
  for (let i = 0; i < arrayTransformer.length; i += 1) {
    usersStatus.push(
      <div className="usersCards">
        <div className="imageCard">
          <img src={arrayTransformer[i].image} />
        </div>
        <ul>
          <li className="cardFirstName">{arrayTransformer[i].firstname}</li>
          <li className="cardName">{arrayTransformer[i].name}</li>
          <li className="cardMail">{arrayTransformer[i].contact}</li>
        </ul>
      </div>,
    );
  }

  return <div className="cardsWrap">{usersStatus}</div>;
};

export default ContactDash;
