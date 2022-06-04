import React from "react";
import Nav from '../../components/nav/Nav';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function PannelMember() {
  return (
    <div>
      <Nav />
      <center>
      <br/><br/><br/><br/>
      <Link to="/GiveFeedbackTopics"> <Button variant="info">Topic Evaluate</Button></Link>
      <Link to="/Addmarkspresentation"> <Button variant="info">Presentation Evaluate</Button></Link>
      </center>
    </div>
  );
}