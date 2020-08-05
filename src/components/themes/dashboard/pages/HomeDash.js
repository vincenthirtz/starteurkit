import React from "react";

const HomeDash = () => {
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
          backgroundColor: "aquamarine",
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
          backgroundColor: "white",
          gridTemplateColumns: "10rem 1fr 10rem",
        }}
      >
        <p
          style={{
            gridColumn: "2/3",
            alignSelf: "center",
            justifySelf: "center",
          }}
        >
          je suis très l'article{" "}
        </p>
      </div>
    </>
  );
};

export default HomeDash;
