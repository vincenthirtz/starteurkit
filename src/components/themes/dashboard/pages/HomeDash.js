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
          backgroundColor: "#f5994a",
          color: "white",
        }}
      >
        <h2 style={{ fontSize: "5rem" }}>Start[☕]rKit</h2>
        <h4>glou glou le bon café </h4>
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
          <h2 style={{ color: "#b15c34" }}> {articleTitle.titre} </h2>
          <div style={{ color: "white", fontWeight: "bolder" }}> {articleTitle.content}</div>
          <img src={articleTitle.contentImage} />
        </div>
      </div>
    </>
  );
};
export default HomeDash;
