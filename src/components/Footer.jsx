import React from "react";

const Footer = () => {
  return (
    <div id="footer" className="d-flex justify-content-center align-items-center flex-wrap">
      <span className="pr-2">Connect</span>
      <span className="ml-3 d-none d-md-block">
        <a href="https://www.linkedin.com/in/jessypiesco/" className="text-light">•LinkedIn</a>
      </span>
      <span className="ml-3 d-none d-md-block">
        <a href="https://github.com/JessyPiesco" className="text-light">•GitHub</a>
      </span>
      <span className="ml-3 d-none d-md-block">
        <a href="mailto:japiesco@outlook.com" className="text-light">•Message</a>
      </span>
      <span className="ml-3 d-md-none">
        <a href="https://www.linkedin.com/in/jessypiesco/" className="text-light">LinkedIn</a>
      </span>
      <span className="ml-3 d-md-none">
        <a href="https://github.com/JessyPiesco" className="text-light">GitHub</a>
      </span>
      <span className="ml-3 d-md-none">
        <a href="mailto:japiesco@outlook.com" className="text-light">Message</a>
      </span>
    </div>
  );
};



export default Footer;
