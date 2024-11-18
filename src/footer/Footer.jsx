import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  const handleclick = (e) => {
    e.preventDefault(); // Prevent the default link behavior
    const path = e.currentTarget.getAttribute("href"); // Get the href attribute
    window.location.href = path; // This will cause a full page reload
  };

  return (
    <>
      <div className="footer">
        <ul>
          <li>
            <a href="#" onClick={handleclick}>
              Schedule appointment
            </a>
          </li>
          <li>
            <a href="#" onClick={handleclick}>
              Complete intake
            </a>
          </li>
          <li>
            <a href="#" onClick={handleclick}>
              FAQ
            </a>
          </li>
          <li>
            <a href="#" onClick={handleclick}>
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
