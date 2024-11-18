import React from "react";
import "./header.css";
export default function Header() {
  return (
    <>
      <header>
        <div className="rama">
          <img
            src="./rama.jpg"
            alt="Rama Health Care"
            className="header-image"
          />
          <div className="ramafirst">
            <p>A’emiro (አዕምሮ)Care</p>
            <p>የአዕምሮ መማክር</p>
          </div>
        </div>
      </header>
    </>
  );
}
