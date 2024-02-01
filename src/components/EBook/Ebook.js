import { useState } from "react";
import "./Ebook.scss";
import ebookImage from "../../images/ebook.jpg";

export const Ebook = () => {
  const [email, setEmail] = useState("");

  const login = () => {
    if (validateEmail(email)) {
      alert("Login successful for " + email);
      console.log("Email:", email);
    } else {
      alert("Please enter a valid email address.");
    }
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <div className="ebook-container">
      <div className="ebook">
        <span className="ebook__category">ebook</span>
        <h3 className="ebook__title">
          Access, Read, Practice & Engage with Digital Content (eBook){" "}
        </h3>
        <p className="ebook__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
          feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut
          magna velit eleifend. Amet, quis urna, a eu.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.
        </p>
        <form className="ebook__form">
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
          />
          <a href="/" className="ebook__button" onClick={login}>
            Login
          </a>
        </form>
      </div>
      <div className="image">
      <img src={ebookImage} alt="Ebook Cover" />
      </div>
    </div>
  );
};
