import "./ReleaseBook.scss";

export const ReleaseBook = ({ books }) => {
  return (
    <>
      <h5 className="new-realise-subtitle">Some quality items</h5>
      <h2 className="new-realise-title">New release books</h2>
      <div className="release-container">
        {books.map((book, id) => (
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
