import React from "react";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="col-11 mx-auto d-flex justify-content-between">
      <div className="py-4 text-secondary fs-6">&copy;2016 Video App</div>
      <div className="py-4">
        <a className="btn border mx-2 rounded-circle" href="/">
          <FaTwitter />
        </a>
        <a className="btn border mx-2 rounded-circle" href="/">
          <FaInstagram />
        </a>
        <a className="btn border mx-2 rounded-circle" href="/">
          <FaFacebookF />
        </a>
      </div>
      <div className="py-4">
        <a className="link-secondary text-decoration-none me-3 fs-6" href="/">
          Privacy Policy
        </a>
        <a className="link-secondary text-decoration-none fs-6" href="/">
          Terms of Use
        </a>
      </div>
    </footer>
  );
};

export default Footer;
