import React, { useState } from "react";
import "./signup.css";
const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username && password) {
      setMessage(`User ${username} signed up successfully!`);
    } else {
      setMessage("Please fill in both fields.");
    }
  };

  return (
    <div className="form">
      <div className="list">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <label className="lable">uaername</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label className="lable">password</label>
          <input type="password" required />
          <label>confirm password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default Signup;
