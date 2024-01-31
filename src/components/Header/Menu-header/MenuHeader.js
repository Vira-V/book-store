import React, { useState } from "react";
import "./MenuHeader.scss";

export const MenuHeader = () => {
  const menuItems = [
    "Home",
    "About us",
    "Books",
    "New release",
    "Contact us",
    "Blog",
  ];
  const [activeMenuItem, setActiveMenuItem] = useState("Home");

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  return (
    <div className="menu-header">
      <ul className="menu-header__list">
        {menuItems.map((menuItem) => (
          <li
            key={menuItem}
            className={menuItem === activeMenuItem ? "active" : ""}
            onClick={() => handleMenuItemClick(menuItem)}
          >
            {menuItem}
          </li>
        ))}
      </ul>
    </div>
  );
};
