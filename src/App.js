// import logo from './logo.svg';
import "./App.css";
import Navbar from "./common/Navbar";
import Lottie from "react-lottie";
import Home from "./assets/lottie/home.json";
import SectionA from "./screens/sectionA/SectionA";
import SectionB from "./screens/SectionB/SectionB";
import SectionC from "./screens/SectionC/SectionC";
import Typical from "react-typical";
import { useEffect, useState } from "react";

function App() {
  const [showReqCallbackButton, setShowReqCallbackButton] = useState(true);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Navbar />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          paddingLeft: "1%",
          justifyContent: "space-between",
          background: "linear-gradient(to right, #0cebeb, #20e3b2, #29ffc6)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: "20px",marginLeft: "10px"}}>
            <Typical
              loop={1}
              // wrapper="b"
              steps={[
                "Hey There",
                2000,
                "Looking For a Makeover",
                2000,
                "You came to a Right Place",
                2000,
                "Click on this Button and give some details we will get back to you",
                2000,
              ]}
            />
          </div>
          {showReqCallbackButton ? 
          <div
            style={{
              width: "140px",
              background: "red",
              borderRadius: "999px",
              alignItems: "center",
              justifyContent: "center",
              padding: "15px",
            }}
          >
            Request a Callback
          </div> : null }
        </div>
        <div style={{ display: "flex" }}>
          <Lottie
            options={{
              loop: false,
              autoplay: true,
              animationData: Home,
            }}
            height={"100vh"}
            width={"50vw"}
          />
        </div>
      </div>
      <SectionA />
      <SectionB />
      <SectionC />
    </div>
  );
}

export default App;
