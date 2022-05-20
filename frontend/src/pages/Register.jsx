import React from "react";
import { Link } from "react-router-dom";

function Register() {
  const handleSignUp = () => {
    e.preventDefault();
    alert("form");
  };
  const handleChange = (e) => {};
  return (
    <div>
      <div className="header">Sign Up</div>
      <label>First name:</label>
      <input
        type="text"
        name="fname"
        placeholder="John"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <br />
      <label>Last name:</label>
      <input
        type="text"
        name="lname"
        placeholder="Doe"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <br />
      <label>Email:</label>
      <input
        type="email"
        name="email"
        placeholder="itxxxxxxxx@my.sliit.lk"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <br />
      <label>IT Number:</label>
      <input
        type="text"
        name="itNumber"
        placeholder="ITxxxxxxxx"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <br />
      <label>Password:</label>
      <input
        type="password"
        name="password"
        placeholder="passowrd"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <br />
      <label>Confirm Password:</label>
      <input
        type="password"
        name="confirmPassword"
        placeholder="confirmPassword"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <br />
      <button onClick={handleSignUp}>Sign Up</button>
      <br />
      <div>
        Already have an account? <Link to="/login">Login </Link>
      </div>
    </div>
  );
}

export default Register;
