import React from "react";
import { useRecoilState } from "recoil";
import footerContentState from "../../../atoms/FooterAtom";

const Footer = () => {
  const [footerContent] = useRecoilState(footerContentState);
  const arrayTransformer = Object.values(footerContent);

  const footerTexts = [];

  for (let i = 0; i < arrayTransformer.length; i += 1) {
    footerTexts.push(
      <div className="footerElements">
        <h5>{arrayTransformer[i].title}</h5>
        <ul>
          <a className="footLink" href={arrayTransformer[i].linkElmt1}>
            {arrayTransformer[i].elmt1}
          </a>
          <a className="footLink" href={arrayTransformer[i].linkElmt2}>
            {arrayTransformer[i].elmt2}
          </a>
          <a className="footLink" href={arrayTransformer[i].linkElmt3}>
            {arrayTransformer[i].elmt3}
          </a>
          <a className="footLink" href={arrayTransformer[i].linkElmt4}>
            {arrayTransformer[i].elmt4}
          </a>
        </ul>
      </div>,
    );
  }
  return <div className="dashFooter">{footerTexts}</div>;
};

export default Footer;
