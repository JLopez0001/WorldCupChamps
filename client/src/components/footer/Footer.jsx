import React from "react";
import { Link } from "react-router-dom";
import "../../styles/footer/footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <p>Found This Useful?</p>
      <p>Get To Know The Developer Behind “The Elites”</p>
      <div>
        <img
          className="img-links"
          src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Symbol.png"
          alt="github"
        />
        <img
          className="img-links"
          src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG29.png"
          alt="linkedIn"
        />
      </div>
    </footer>
  );
}

export default Footer;
