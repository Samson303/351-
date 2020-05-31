import React from "react";
import Contact from "./Contact";
import "./styles.css";
import Signup from "./Signup";
import Register from "./Register";

export default function App() {
  return (
    <>
      <div>
        <h1>Join Our Slack Community </h1>
        <p>351 is the startup community </p>based in Portugal. Sign up here to
        get your invataion.
      </div>
      <Register />
    </>
  );
}
