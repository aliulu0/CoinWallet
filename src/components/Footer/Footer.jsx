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
        <a href="https://github.com/aliulu0" style={{color:"inherit"}}>
        <AiFillGithub className="contact-icon" size="2rem" />
        </a>
        <a href="https://www.linkedin.com/in/ali-ulu/" style={{color:"inherit"}}>
        <AiFillLinkedin className="contact-icon" size="2rem" />
        </a>
      </div>
    </div>
  );
}
export default Footer;
