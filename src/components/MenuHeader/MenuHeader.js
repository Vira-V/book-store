import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./MenuHeader.scss";

export const MenuHeader = () => {
  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About us", path: "/#" },
    { label: "Books", path: "/books" },
    { label: "New release", path: "/#" },
    { label: "Contact us", path: "/#" },
    { label: "Blog", path: "/#" },
  ];

  const [activeMenuItem, setActiveMenuItem] = useState("Home");

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  return (
    <div className="menu-header">
      <ul className="menu-header__list">
        {menuItems.map(({ label, path }) => (
          <li
            key={label}
            className={label === activeMenuItem ? "active" : ""}
            onClick={() => handleMenuItemClick(label)}
          >
            {path === "/" || path === "/books" ? (
              <NavLink to={path} activeclassname="active">
                {label}
              </NavLink>
            ) : (
              <span>{label}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
