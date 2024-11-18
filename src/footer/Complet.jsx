import React from "react";
import "./complet.css";
const Complet = () => {
  return (
    <>
      <div>
        <h3>Intake form</h3>
        <h2>Help us serve you better</h2>
        <form>
          <label>Name*</label>
          <input type="text" />
          <label>Email address *</label>
          <input type="email" />
          <label>Age*</label>
          <input type="number" />
        </form>
      </div>
    </>
  );
};

export default Complet;
