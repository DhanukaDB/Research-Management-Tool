import React from "react";
import home from '../../asserts/home.jpg';

export default function Home() {
  return (
    <div>
      <img src={home} alt="home" style={{ height: "90vh", width: "80vw" }} />
    </div>
  );
}
