import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
const Menu = () => {
  return (
    <nav className="menu">
      <NavLink to="/">Главная</NavLink>
      <NavLink to="/movies">Фильмы</NavLink>
      <NavLink to="/tv">Сериалы</NavLink>
      <button>Search</button>
    </nav>
  );
};

export default Menu;
