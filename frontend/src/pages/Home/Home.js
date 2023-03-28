import React from "react";
import NavBar from "../../components/Navigation/NavBar";
import Leftpane from "../../components/Leftpane/leftpane";
import Rightpane from "../../components/Rightpane/rightpane";
import "./home.css";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="bottomcontainer">
        <Rightpane />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
