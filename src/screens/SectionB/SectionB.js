import React from "react";
import sectionB from "../../assets/images/2.webp";

function SectionB() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ display: "flex", flexDirection:"column", backgroundColor:"#e7e5e3"}}>
          <h1>Previous Works</h1>
          <p>We are a bunch of geeks destined to change th look of your day to day lifestyle and we are here to change your home to a completely new look.</p>
      </div>
      <div style={{ display: "flex" }}>
        <img src={sectionB} alt="Right-Image" height="100%" width= "90%"/>
      </div>

    </div>
  );
}

export default SectionB;
