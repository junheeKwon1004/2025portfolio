import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footerWrap">
        <div className="Fbox linkA">
          <a
            href="https://velog.io/@htt1247/posts"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="src/assets/images/velog_icon.png" alt="Velog icon" />
            <p>Velog</p>
          </a>
        </div>
        <div className="Fbox">
          <p>@ 2025. Junhee-Kwon All Rights Reserved</p>
        </div>
        <div className="Fbox linkA">
          <a
            href="https://github.com/yourUsername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="src/assets/images/github_icon.png" alt="GitHub icon" />
            <p>GitHub</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
