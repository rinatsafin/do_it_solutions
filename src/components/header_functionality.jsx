import React from "react";
import classes from "../css/style.css";

const Header = (props) => {
  return (
    <header>
      <div className="logo">
          LOGO
      </div>
      <input 
        type="text"
        onChange={props.keywords}
      />
    </header>
  );
};

export default Header;