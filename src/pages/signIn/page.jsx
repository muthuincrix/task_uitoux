// src/components/SignIn.js
import React, { useEffect, useState } from "react";
import "./signin.css"; // Importing the CSS file
import { useNavigate } from "react-router-dom";
import Notification from "../../utils/Alert";
function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
  });
  const [severity, setSeverity] = useState("");
  const [message, setMessage] = useState("");
  const [notificate, setNotification] = useState(false);

  const controlNotification = (status, message) => {
    setMessage(message);
    setSeverity(status);
    setNotification(true);
  };
  const router = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can add form validation or authentication logic here
     fetch("/api/user-login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then( async (data) => {
        console.log(data);
       await controlNotification(data.status, data.message);
        if (data.status == "success") setTimeout(() => router("/") , 3000); 
      });
  };

  useEffect(() => {
    fetch("/api/isValid", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status == "success") {
          router("/");
        }
      });
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
        <Notification 
        setNotification={setNotification}
        notificate={notificate}
        message={message}
        severity={severity}
        />
      <div className="signin-container" style={{ position: "relative" }}>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label >Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn">
            Sign In
          </button>
        </form>
        <a
          style={{ position: "absolute", bottom: 10, left: 10 }}
          href="/signup"
        >
          {" "}
          signUp
        </a>
      </div>
    </div>
  );
}

export default SignIn;
