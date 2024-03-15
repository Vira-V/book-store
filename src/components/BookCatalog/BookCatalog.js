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

      <div className="catalog-container">
        {catalog.map((book, id) => (
          <div key={id} className="catalog">
            <img
              src={book.image}
              className="catalog__image"
              alt="Featured Book"
            />
            <h4 className="catalog__title">{book.title}</h4>
            <div className="catalog__author">{book.author}</div>
            <div className="catalog__price">{book.price}</div>
            <a href="/" className="catalog__button">
              Add to cart
            </a>
          </div>
        ))}
      </div>
    </>
  );
};
