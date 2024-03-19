import React from "react";
import bookImage from "../../images/book4.png";
import "./CartItem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleUp,
  faArrowAltCircleDown,
  faCircleCheck,
} from "@fortawesome/free-regular-svg-icons";

export const CartItem = () => {
  return (
    <div className="cart-item">
      <div className="cart-item__content">
        <button className="cart-item__remove">
          <FontAwesomeIcon icon={faCircleCheck} />
        </button>
        <img src={bookImage} className="cart-item__image" alt="Cart item" />
        <div className="cart-item__name">Book1</div>
        <div className="cart-item__author">Joanna Bator</div>
        <div className="cart-item__count">
          <button className="cart-item__count--button cart-item__count--decrease-amount">
            {" "}
            <FontAwesomeIcon icon={faArrowAltCircleDown} />{" "}
          </button>
          <div className="cart-item__count--amount">1</div>
          <button className="cart-item__count--button cart-item__count--increase-amount">
            {" "}
            <FontAwesomeIcon icon={faArrowAltCircleUp} />{" "}
          </button>
        </div>
        <div className="cart-item__price">$45.00</div>
      </div>
    </div>
  );
};
