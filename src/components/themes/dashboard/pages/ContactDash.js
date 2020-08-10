import React from "react";
import { useRecoilState } from "recoil";
import contactContentState from "../../../atoms/ContactAtom";

const ContactDash = () => {
  const [contactContent] = useRecoilState(contactContentState);

  const arrayTransformer = Object.values(contactContent);

  const usersStatus = [];
  for (let i = 0; i < arrayTransformer.length; i += 1) {
    usersStatus.push(
      <div>
        <h3>{arrayTransformer[i].prenom}</h3>
        <h4>{arrayTransformer[i].nom}</h4>
        <p>{arrayTransformer[i].contact}</p>
      </div>,
    );
  }
  return <>{usersStatus}</>;
};

export default ContactDash;
