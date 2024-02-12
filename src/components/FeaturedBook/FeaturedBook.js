import "./FeaturedBook.scss";
import featuredBook from "../../images/book.png";

export const FeaturedBook = () => {
  return (
    <div className="book-container">
      <div className="book">
        <img src={featuredBook} alt="Featured Book" />
      </div>

      <div className="details">
        <h3 className="details__title">Featured Book</h3>
        <span className="details__author">By Timhur Hood</span>
        <h4 className="details__subtitle">Birds Gonna Be Happy</h4>
        <p className="details__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
          feugiat amet, libero ipsum enim pharetra hac.
        </p>
        <div className="details__price">$ 45.00</div>
        <a href="/" className="view-button">
          <span className="view-button__text">View more</span>
        </a>
      </div>
    </div>
  );
};
