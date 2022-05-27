import React from "react";
import Lottie from "react-lottie";
import Hamburger from "../assets/lottie/hamburger.json";
import Logo from "../assets/images/logo.png";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginRight: "1%",
        marginLeft: "1%",
      }}
    >
      <div style={{ height: "50px" }}>
        {/* <p style={{ fontSize: "18px" }}>Interiors</p> */}
        <img src={Logo} alt="logo" height="100%" width="100%" />
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
        />
      </div>
    </div>
  );
}

export default Navbar;
