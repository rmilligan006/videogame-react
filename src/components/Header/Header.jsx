import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <p onClick={() => window.scroll(0, 0)} className="Header">
        🎮 Videogame Hub 🎮
      </p>
      <p className="HeaderOne">Powered by RAWG.IO</p>
    </div>
  );
};

export default Header;
