import React from "react";
import { useRecoilState } from "recoil";
import articleTitleState from "../../../atoms/ArticlesAtom";
// import articleTitle from '../../../atoms/Atom';

const HomeDash = () => {
  const [articleTitle] = useRecoilState(articleTitleState);

  return (
    <>
      <div
        className="presentation"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#ff9505",
          color: "white",
        }}
      >
        <h2>holala c'est le gros slogan</h2>
        <div>ici logo</div>
        <h4>petite phrase d'accroche</h4>
      </div>

      <div
        style={{
          display: "grid",
          width: "100%",
          height: "100%",
          backgroundColor: "#ffc971",
          gridTemplateColumns: "5rem 1fr 5rem",
        }}
      >
        <div
          style={{
            gridColumn: "2/3",
            alignSelf: "center",
            justifySelf: "center",
          }}
        >
          <h2> {articleTitle.titre} </h2>
          <div>{articleTitle.content}</div>
          <img src={articleTitle.contentImage} />
        </div>
      </div>
    </>
  );
};
export default HomeDash;
