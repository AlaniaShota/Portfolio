import { useEffect, useState } from "react";
import "./Project.scss";
import { Link } from "react-router-dom";

export const Project = ({ index, title, manageModal, imgSrc }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 430);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 430);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isSmallScreen) {
    return (
      <div className="mob-project">
        <Link to={`/work/${title}`}>
          <img src={imgSrc} alt={title} className="mob-project-img" />
          <div className="mob-project-content">
            <h2 className="mob-project-title">{title}</h2>
            <div className="stripe"></div>
            <p className="mob-project-description">ReactJS</p>
          </div>
        </Link>
      </div>
    );
  } else {
    return (
      <Link
        to={`/work/${title}`}
        onMouseEnter={(e) => {
          manageModal(true, index, e.clientX, e.clientY);
        }}
        onMouseLeave={(e) => {
          manageModal(false, index, e.clientX, e.clientY);
        }}
        className="project"
      >
        <h2 className="project-title">{title}</h2>
        <p className="project-description">ReactJS</p>
      </Link>
    );
  }
};
