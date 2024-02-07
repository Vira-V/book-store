import "./Categories.scss";
import educationBook from "../../images/higher-education.jpg";
import managementBook from "../../images/management-books.jpg";
import engineeringBook from "../../images/engineering-books.jpg";

export const Categories = () => {
  return (
    <div className="categories-container">
      <div className="category">
        <div>
          <span className="ebook__category">Categories</span>
          <h3 className="category__title">Explore our Top Categories</h3>
        </div>

        <div className="category__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
          feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut
          magna velit eleifend. Amet, quis urna, a eu.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum
          ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat
          amet, libero ipsum..
        </div>
      </div>
      <div className="gallery-container">
        <div className="gallery">
          <div className="gallery__image">
            <img src={educationBook} alt="Higher Education" />
          </div>
          <h4 className="gallery__title">Higher Education</h4>
          <p className="gallery__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
            feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut
            mat,
          </p>
        </div>
        <div className="gallery">
          <div className="gallery__image">
            <img src={managementBook} alt="Managment Books" />
          </div>
          <h4 className="gallery__title">Managment Books</h4>
          <p className="gallery__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
            feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut
            mat,
          </p>
        </div>
        <div className="gallery">
          <div className="gallery__image">
            <img src={engineeringBook} alt="Engineering Books" />
          </div>
          <h4 className="gallery__title">Engineering Books</h4>
          <p className="gallery__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
            feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut
            mat,
          </p>
        </div>
      </div>
      <a href="/" className="view-button">
        <span className="view-button__text">View more</span>
      </a>
    </div>
  );
};
