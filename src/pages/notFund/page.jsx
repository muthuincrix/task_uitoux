// src/components/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import './not.css'; // Optional: CSS styling for the 404 page

function NotFound() {
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <h2>Oops! Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/" className="back-home-link">Go Back to Home</Link>
    </div>
  );
}

export default NotFound;
