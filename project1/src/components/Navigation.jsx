import React from 'react'

const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
        <h2>NIke</h2>
      </div>
      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>

      <button className="login-btn">login</button>
    </nav>
  );
}

export default Navigation
