import "./Sale.scss";
import saleImage from "../../images/sale.png";

export const Sale = () => {
  return (
      <div className="sale-container">
          <div className="sale">
            <h2 className="sale__title">
            All books are 50% off now! Don't miss such a deal!
            </h2>
            <p className="sale__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.
            </p>
            <div className="sale__timer"></div>

          </div>
          <img
              src={saleImage}
              className="sale__image"
              alt="Featured Book"
            />
      </div>
  );
};
