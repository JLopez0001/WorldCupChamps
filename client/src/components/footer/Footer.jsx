import React from "react";
import { Link } from "react-router-dom";
import "../../styles/footer/footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <p className="footer-content">Found This Useful?</p>
      <p className="footer-content">
        Get To Know The Developer Behind “The Elites”
      </p>
      <div>
        <Link to={"https://github.com/JLopez0001"}>
          <img
            className="img-links"
            src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Symbol.png"
            alt="github"
          />
        </Link>
        <Link to={"https://www.linkedin.com/in/john-lopez01/"}>
          <img
            className="img-links"
            src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG29.png"
            alt="linkedIn"
          />
        </Link>
      </div>
      <p>© 2024 The Elites. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
