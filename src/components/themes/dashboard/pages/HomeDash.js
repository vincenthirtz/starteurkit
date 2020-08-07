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
          <div> suis decéption </div>
        </div>
      </div>
    </>
  );
};

export default HomeDash;
