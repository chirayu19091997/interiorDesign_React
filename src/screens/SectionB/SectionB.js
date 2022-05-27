import React from "react";
import sectionB from "../../assets/images/2.webp";

function SectionB() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        paddingLeft: "2%",
        paddingRight: "2%",
        backgroundColor: "#e7e5e3",
        justifyContent: "space-between",
        // border: "1px solid black",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Previous Works</h1>
        <p style={{ maxWidth: "30vw" }}>
          We are a bunch of geeks destined to change the look of your day to day
          lifestyle and we are here to change your home to a completely new
          look.
        </p>
      </div>
      <div style={{ display: "flex" }}>
        <img src={sectionB} alt="Right" height="100%" width="100%" />
      </div>
    </div>
  );
}

export default SectionB;
