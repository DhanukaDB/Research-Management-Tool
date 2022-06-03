import React from "react";
import Home from '../../components/Home'

export default function Home() {
  return (
    <div>
      <Nav />
      <img src={home} alt="home" style={{ height: "90vh", width: "75vw", marginTop: "0px", paddingTop: "120px" }} />
    </div>
  );
}
