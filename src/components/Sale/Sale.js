import "./Sale.scss";
import saleImage from "../../images/sale.png";
import { CountdownTimer } from "../Timer/CountdownTimer";

export const Sale = () => {
    const THREE_DAYS_IN_MS = 768 * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();
  
    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
      <div className="sale-container">     
          <div className="sale">
            <h2 className="sale__title">
            All books are 50% off now! Don't miss such a deal!
            </h2>
            <p className="sale__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.
            </p>
            <div className="sale__timer">
                <CountdownTimer targetDate={dateTimeAfterThreeDays} />
            </div>
            </div>
          <img
              src={saleImage}
              className="sale__image"
              alt="Featured Book"
            />
           
      </div>
  );
};
