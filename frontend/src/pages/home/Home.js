import React from "react";
import home from '../../asserts/home.jpg';
import Nav from '../../components/nav/Nav';

export default function Home() {
  return (
    <div>
      <Nav />
      <img src={home} alt="home" style={{ height: "90vh", width: "75vw", marginTop: "0px", paddingTop: "120px" }} />
    </div>
  );
}