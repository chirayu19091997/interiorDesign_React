import React from "react";
import sectionA from "../../assets/lottie/timelapseid.json";
import Lottie from "react-lottie"

function SectionA() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {/* <div style={{border: "2px solid red"}}> */}
        {/* <img src={sectionA} alt="Left-Image" height="100%" width= "90%"/> */}
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: sectionA, 
          }}
          height={"50%"}
          width={"50%"}
        />
      {/* </div> */}
      <div style={{ display: "flex", flexDirection:"column"}}>
          <h1>What We Do?</h1>
          <p>We are a bunch of geeks destined to change th look of your day to day lifestyle and we are here to change your home to a completely new look.</p>
      </div>
    </div>
  );
}

export default SectionA;
