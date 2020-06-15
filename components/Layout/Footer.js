import React from "react";
import { navigate } from "hookrouter";

const Footer = () => {
  return (
    <div className="footer">
      <div className="row">
        <h4>Social</h4>
        <ul>
          <a href="https://twitter.com/alukaard76">Twitter</a>
          <a href="https://github.com/vincenthirtz">Github</a>
          <a href="https://discord.gg/9UuNaV">Discord</a>
        </ul>
      </div>

      <div className="row">
        <h4>Fast</h4>
        <p>Starting a project has never been easier</p>
      </div>

      <div className="row">
        <h4>Tech</h4>
        <ul>
          <a href="https://reactjs.org/">React</a>
          <a href="https://parceljs.org/">Parcel</a>
          <a href="https://sass-lang.com/">Sass</a>
          <a href="https://nodejs.org/">Node</a>
        </ul>
      </div>

      <div className="row">
        <h4>Simple</h4>
        <p>Focus only on your application code</p>
      </div>
      <div className="row">
        <ul>
          <a href="#">Sitemap</a>
          <a onClick={() => navigate("/contact")}>Contact</a>
          <a href="#">Terms and Conditions</a>
          <a href="#">Privacy Policy</a>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
