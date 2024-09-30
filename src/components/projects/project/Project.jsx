import "./Project.scss";
import { Link } from "react-router-dom";

export const Project = ({ index, title, manageModal,  }) => {
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
};
