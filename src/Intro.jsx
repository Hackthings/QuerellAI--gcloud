import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./NameInputComponent.css"; // Import your custom CSS for styling

function NameInputComponent() {
  const [name, setName] = useState("");
  const history = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const redirectToPage = (path) => {
    if (path === "chat" && name === "") {
      toast.error("Enter your name");
    } else if (name.trim() !== "" && path === "chat") {
      toast.success("Fetching...");
      history(`/${path}?name=${encodeURIComponent(name)}`);
    } else if (path === "pdf") {
      toast.success("Fetching...");
      history(`/${path}`);
    }
  };

  return (
    <div className="main">
      <div className="container">
        <h1 className="intro">Welcome to QuerellAI</h1>
        <p className="intro-para">
          Step into the world of QuerellAI, where intelligent conversations and
          interactive experiences await. Embark on an innovative journey that
          blurs the lines between human interaction and artificial intelligence.
          Whether you're here to start a stimulating conversation or delve into
          administration, your adventure begins by simply entering your name.
          Let QuerellAI redefine your digital encounters – your next experience
          is just a name away!
        </p>
        <h2 className="title">Enter Your Name</h2>
        <input
          className="input-field"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
        />
        <button className="button" onClick={() => redirectToPage("chat")}>
          Start Interview
        </button>
        <button className="button" onClick={() => redirectToPage("pdf")}>
          Go to Admin Page
        </button>
      </div>
    </div>
  );
}

export default NameInputComponent;
