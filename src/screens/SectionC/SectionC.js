import React from "react";
import Lottie from "react-lottie";
import ManAninmation from "../../assets/lottie/man.json"

function SectionC() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ display: "flex" }}>
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: ManAninmation, 
          }}
          height={"100%"}
          width={"100%"}
        />
      </div>
      <div style={{ display: "flex", flexDirection:"column"}}>
          <h1>Why Us?</h1>
          <p>We Know Designing your houses can be a hassle and seem to be a pretty costly and long time consuming but we are the experts and we break myths trust us and we will get your new look ready with a blink.</p>
      </div>
    </div>
  );
}

export default SectionC;
