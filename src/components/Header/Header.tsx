import React from "react";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import User from "./User/User";

import "./style.css";
const Header = () => {
  return (
    <header className="header">
      <div className="header_wrapper">
        <Logo />
        <Menu />
        <User />
      </div>
    </header>
  );
};

export default Header;
