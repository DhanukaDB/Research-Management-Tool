import React from "react";
import Nav from '../../components/nav/Nav';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import StudentList from "./StudentList";

export default function UserData() {
  return (
    <div>
        <StudentList/>
    </div>
  );
}