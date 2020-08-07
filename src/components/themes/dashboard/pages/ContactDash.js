import React from "react";
import { useRecoilState } from "recoil";
import contactContentState from "../../../atoms/ContactAtom";

const ContactDash = () => {
  const [contactContent, setContactContent] = useRecoilState(contactContentState);
  const testSwitch = () => {
    setContactContent({ nom: "patrick", prenom: "joko", contact: "NON" });
  };
  return (
    <>
      <div>
        <button type="button" onClick={() => testSwitch()}>
          wesh
        </button>
        <h3>{contactContent.prenom}</h3>
        <h4>{contactContent.nom}</h4>
        <h4>Contact</h4>
        <p>{contactContent.contact}</p>
      </div>
      <h3>{contactContent.prenom}</h3>
      <h4>{contactContent.nom}</h4>
      <h4>Contact</h4>
      <p>{contactContent.contact}</p>
    </>
  );
};

export default ContactDash;
