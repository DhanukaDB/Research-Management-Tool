import React from "react";
import Nav from '../../components/nav/Nav';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function SupervisorHome() {
  return (
    <div>
      <Nav />
      <center>
      <br/><br/><br/><br/>
      <Link to="/AddmarksDocs"> <Button variant="info">Document Evaluation</Button></Link>
      <Link to="/TopicAccept"> <Button variant="info">Topics Acceptance</Button></Link>
      <Link to="/chat"> <Button variant="info">Chat With Groups</Button></Link>
      </center>
    </div>
  );
}