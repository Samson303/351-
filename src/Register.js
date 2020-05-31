import React, { useState } from "react";
import "./styles.css";

export default function Signup() {
  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState("");

  const handleInput = (e) => {
    const copyFormData = { ...formData };
    copyFormData[e.target.name] = e.target.value;
    setFormData(copyFormData);
  };

  const sendData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/samsonamha/airtable/QAPFRCnyuxGjUCkh?tableName=Test",
        {
          method: "post",
          body: JSON.stringify([formData]),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
      console.log("Success:", JSON.stringify(json));
      setMessage("Success");
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error");
    }
  };

  return (
    <div>
      <form
        class="form-style-9"
        id="contact"
        name="contact"
        required
        onSubmit={sendData}
      >
        <ul>
          <li>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              onChange={handleInput}
              class="field-style field-split align-left"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              onChange={handleInput}
              class="field-style field-split align-right"
            />
          </li>
          <li>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={handleInput}
              class="field-style field-split align-left"
            />
            <input
              type="url"
              name="social"
              placeholder="linkedin.com/in/malikpiara/"
              required
              onChange={handleInput}
              class="field-style field-split align-right"
            />
          </li>
          <li>
            <input
              type="text"
              name="location"
              placeholder="Porto, Portugal"
              required
              onChange={handleInput}
              class="field-style field-full align-none"
            />
          </li>
          <li>
            <textarea
              name="why"
              onChange={handleInput}
              class="field-style"
            ></textarea>
          </li>
          <li>
            <input name="submit" type="submit" value="Send" />
            <div>{message}</div>
          </li>
        </ul>
      </form>
    </div>
  );
}
