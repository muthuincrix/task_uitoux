// src/components/SignUp.js
import React, { useState } from "react";
import "./signup.css"; // Importing the CSS file
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Notification from "../../utils/Alert";
function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
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

  useEffect(() => {
    fetch("/api/isValid", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
      
        if (data.status == "success") {
          router("/");
        }
      });

  },[]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can add form validation or sign-up logic here
    await fetch(`api/user-create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,// You may need to encrypt the password before sending it to the server.  In this example, we're simply sending it as plain text.  In a real-world application, you'd typically encrypt the password before sending it.  Here's an example of how you might do it with bcrypt: https://www.npmjs.com/package/bcryptjs
      }), // Sending form data as JSON object to the server.  Note: You may need to adjust the server-side implementation.  In this example, we're using a mock server.  In a real-world application, you'd typically send this data to a server-side API.  Here's an example of how you might do it with Axios: https://github.com/axios/axios/blob/main/README.md#sending-data-with-the-post-method-example
    })
      .then((res) => res.json())
      .then((data) => {
      
        controlNotification(data.status, data.message);
        if (data.status == "success") {
          setTimeout(() => router("/") , 3000); 
        }
      });
  };

  return (
    <div 
    style={{
      display: "flex",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh" // Making the signup form full-screen on the page.  Note: This is just for demonstration purposes.  In a real-world application, you may want to adjust the height based on your design.  Here's an example of how you might do it with CSS: https://www.w3schools.com/css/css_flexbox.asp#flex-grow-shrink-basis
    }}
    > 
      <Notification 
         setNotification={setNotification}
         notificate={notificate}
         message={message}
         severity={severity}
         />

    <div className="signup-container" >
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
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
          Sign Up
        </button>
      </form>
    </div>
    </div>
  );
}

export default SignUp;
