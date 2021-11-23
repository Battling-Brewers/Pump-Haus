
import React from "react";
import { useLocation, useHistory } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer bg-dark fixed-bottom">
      <div className="text-center">
        <a href="mailto:pumphaus2021.com">
          <img
            src="https://img.icons8.com/ios/50/000000/apple-mail.png"
            alt="Gmail"
            className="btn-floating btn-lg"
          />
        </a>
        <a href="https://twitter.com/HausPump?ref_src=twsrc%5Etfw">
          <img
            src="https://img.icons8.com/ios/50/000000/twitter--v1.png"
            alt="Twitter"
            className="btn-floating btn-lg"
          />
        </a>
        <a href="https://youtu.be/-xZQ0YZ7ls4">
          <img
            src="https://img.icons8.com/ios/50/000000/youtube-play--v1.png"
            alt="YouTube"
            className="btn-floating btn-lg"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

