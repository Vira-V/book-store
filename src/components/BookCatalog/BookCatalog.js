import "./BookCatalog.scss";

export const BookCatalog = ({ catalog }) => {
  return (
    <>
      <div className="release-container">
        {catalog.map((catalog, id) => (
          <div key={id} className="release">
            <img
              src={catalog.image}
              className="release__image"
              alt="Featured Book"
            />
            <h4 className="release__title">{catalog.title}</h4>
            <div className="release__author">{catalog.author}</div>
            <div className="release__price">{catalog.price}</div>
            <a href="/" className="release__button">
              Add to cart
            </a>
          </div>
        ))}
      </div>
    </>
  );
};