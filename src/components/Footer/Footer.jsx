import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-center text-white fixed-bottom">
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright: SP
        </div>
      </footer>
    </div>
  );
}

export default Footer