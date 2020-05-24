import React from "react";
import Contact from "./Contact";
import "./styles.css";

export default function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        <a href="https://airtable.com/shrOAR6Hg7a4Y3aHr" target="_blank">
          Airtable View
        </a>
      </h1>
      <div className="App">
        <div className="contact-form form">
          <h1>Contact Form</h1>
          <Contact />
        </div>
      </div>
    </>
  );
}
