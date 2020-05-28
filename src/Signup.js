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
        className="input-form"
        id="contact"
        name="contact"
        required
        onSubmit={sendData}
      >
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          required
          onChange={handleInput}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          required
          onChange={handleInput}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleInput}
        />
        <label htmlFor="social">Your Twitter/LinkedIn url</label>
        <input
          type="url"
          name="social"
          placeholder="linkedin.com/in/malikpiara/"
          required
          onChange={handleInput}
        />
        <label htmlFor="location">Where are you currently living?</label>
        <input
          type="text"
          name="location"
          placeholder="Porto, Portugal"
          required
          onChange={handleInput}
        />
        <label htmlFor="why">
          Why do you want to join our slack community?*
        </label>
        <textarea name="why" onChange={handleInput} />
        <input name="submit" type="submit" value="Send" />
        <div>{message}</div>
      </form>
    </div>
  );
}
