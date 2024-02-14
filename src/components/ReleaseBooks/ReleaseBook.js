import "./ReleaseBook.scss";
import releaseBook from "../../images/book4 4.png";

export const ReleaseBook = () => {
  return (
      <div className="release">
        <img src={releaseBook} alt="Featured Book" />
        <h4 className="release__title">Featured Book</h4>
        <span className="release__author">By Timhur Hood</span>

        <div className="release__price">$ 40.00</div>

        <a href="/" className="release__button">
            Add to cart
        </a>
      </div>
  );
};
