import React, { useState } from "react";
import emailjs from "emailjs-com";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const MessageForm = () => {
  const options = [
    "Send General Message",
    "Refer for a job",
    "I'd like to talk about hiring you",
  ];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      from_name: name,
      to_name: "Jessy",
      from_email: "japiesco@outlook.com",
      messages: message,
      from_user_email: email,
    };

    emailjs.send("service_wv68rfn", "template_6eu14u8", templateParams,"p11l9eyN6C8GVyUKL" ).then(
      (response) => {
        console.log("Email sent successfully:", response);
        // Add any success message or further actions you want to perform
      },
      (error) => {
        console.error("Email sending failed:", error);
        // Add any error handling or display an error message
      }
    );

    // Clear form fields after submission
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div id= "messageForm"className="container-fluid">
    <div className="row justify-content-center">
      <div className="col-lg-2 col-12 order-md-first sides-container pb-1 p-0">
        <LeftSide />
      </div>
      <div className="col-lg-8 col-md-10 pt-2">
        <div id="messageBox" className="border p-4">
          <h2 className="text-center">Message Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="selectOption" className="form-label">
              Select an option:
            </label>
            <select
              className="form-select"
              id="selectOption"
              value={selectedOption}
              onChange={handleOptionChange}
            >
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="inputName" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputEmail" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputMessage" className="form-label">
              Message:
            </label>
            <textarea
              className="form-control"
              id="inputMessage"
              value={message}
              onChange={handleMessageChange}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
    <div className="col-lg-2 col-12 order-md-last sides-container pb-1 p-0">
      <RightSide />
    </div>
  </div>

</div>

  );
};

export default MessageForm;
