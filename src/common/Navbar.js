import React from "react";
import Lottie from "react-lottie";
import Hamburger from "../assets/lottie/hamburger.json";

function Navbar() {
  return (
      <div style={{display: "flex",alignItems:"center",justifyContent: "space-between", marginRight: "1%",marginLeft: "1%"}}>
        <div>
            <p style={{fontSize:"18px"}}>Interiors</p>
        </div>
        <div>
    <Lottie
      options={{
        loop: false,
        autoplay: false,
        animationData: Hamburger,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      }}
      height={50}
      width={50}
    /></div></div>
  );
}

export default Navbar;
