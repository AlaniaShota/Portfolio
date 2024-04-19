import { Link } from "react-router-dom";
import "./ImgProject.scss";

export const ImgProject = ({ data, categoryFilter }) => {
  const displayedProject = categoryFilter
    ? data.filter((item) => item.type === categoryFilter)
    : data;

  return (
    <div className="project-img-content mob-project">
      {displayedProject.map((item) => (
        <div key={item.id} className="project-img-section">
          <Link to={item.title}>
            <div
              className="project-img-content-img "
              style={{ background: item.color }}
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="mob-project-img"
              />
            </div>
            <div className="project-img-content-content mob-project-content">
              <h2 className="project-img-content-title mob-project-title">
                {item.title}
              </h2>
              <div className="stripe"></div>
              <p className="project-img-content-description mob-project-description">
                ReactJS
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
