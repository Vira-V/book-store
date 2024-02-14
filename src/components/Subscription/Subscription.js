import { useState } from "react";
import "./Subscription.scss";

export const Subscription = () => {
  const [email, setEmail] = useState("");

  const subscribe = () => {
    if (validateEmail(email)) {
      alert("Subscription successful for " + email);
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
    <div className="subscription-container">
      <div className="subscription">
        <h2 className="subscription__title">Subscribe to our newsletter</h2>
      </div>
      <div className="subscription-details">
        <p className="subscription-details__text">Sed eu feugiat amet, libero ipsum enim pharetra hac dolor sit amet, consectetur. Elit adipiscing enim pharetra hac.</p>
        <form className="subscription-details__form">
          <label htmlFor="subscription-details__email"></label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address here"
            required
          />
          <a href="/" className="button" onClick={subscribe}>
              <span className="button__text">Send</span>
            </a>
        </form>
      </div>
    </div>
  );
};
