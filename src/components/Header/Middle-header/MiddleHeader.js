import React from "react";
import { Link } from "react-router-dom";
import "./MiddleHeader.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faShoppingBasket, faSearch } from "@fortawesome/free-solid-svg-icons";

export const MiddleHeader = () => {
  return (
    <div className="middle-header">
      <Link to="/"><div className="middle-header__avatar"></div></Link>
      <div className="middle-header__search">
        <input
          type="text"
          name="input"
          className="middle-header__search-input"
          placeholder="Search Books"
        />
        <FontAwesomeIcon icon={faSearch} className="middle-header__search-icon" />
      </div>
      <div className="middle-header__menu">
        <a href="/account" className="middle-header__menu-icon">
          <FontAwesomeIcon icon={faUser} />
          <span className="middle-header__menu-text">Account</span>
        </a>

        <Link to="/cart" className="middle-header__menu-icon">
          <FontAwesomeIcon icon={faShoppingBasket} />
          <span className="middle-header__menu-text">Cart:(0$)</span>
        </Link>

        <a href="/wishlist" className="middle-header__menu-icon">
          <FontAwesomeIcon icon={faHeart} />
          <span className="middle-header__menu-text">Wishlist</span>
        </a>
      </div>
    </div>
  );
};
