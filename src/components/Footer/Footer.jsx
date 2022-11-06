import React from "react";
import "./footer.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
function Footer() {
  return (
    <div className="footer p-2">
      <h4 className="fw-bold">Contact me</h4>
      <p>
        <strong>© Copyright 2022 - Ali Ulu</strong>
      </p>
      <div className="contact">
        <AiFillGithub className="contact-icon" size="2rem" />
        <AiFillLinkedin className="contact-icon" size="2rem" />
      </div>
    </div>
  );
}
export default Footer;
