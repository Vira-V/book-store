import "./Introduce.scss";
import introduceImage from "../../images/introduce-image.jpg";

export const Introduce = () => {
  return (
    <div className="introduce-container">
        <div className="introduce">
        <h3 className="introduce__title">Ipsum Dolor Si</h3>
        <p className="introduce__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.</p>
        <a href="/" className="view-button">
        <span className="view-button__text">View more</span>
      </a>
        </div>

        <div className="category__text">
        <img src={introduceImage} alt="Slider" />
        </div>           
    </div>
  );
};
