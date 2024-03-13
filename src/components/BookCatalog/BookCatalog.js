import "./BookCatalog.scss";
import { NavLink } from "react-router-dom";

export const BookCatalog = ({ catalog }) => {
  return (
    <>
      <div className="catalog-navigation">
        <NavLink to="/">
          <p className="catalog-navigation__text">Home</p>
        </NavLink>
        <p className="catalog-navigation__text">/</p>
        <NavLink to="/books">
          <p className="catalog-navigation__text">Books</p>
        </NavLink>
      </div>

      <div className="release-container">
        {catalog.map((book, id) => (
          <div key={id} className="release">
            <img
              src={book.image}
              className="release__image"
              alt="Featured Book"
            />
            <h4 className="release__title">{book.title}</h4>
            <div className="release__author">{book.author}</div>
            <div className="release__price">{book.price}</div>
            <a href="/" className="release__button">
              Add to cart
            </a>
          </div>
        ))}
      </div>
    </>
  );
};
