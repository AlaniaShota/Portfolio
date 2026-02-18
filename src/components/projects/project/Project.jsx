import "./Project.scss";
import { Link } from "react-router-dom";

export const Project = ({
  index,
  title,
  type,
  manageModal,
  workRouteBase,
  typeLabelFallback,
}) => {
  return (
    <Link
      to={`${workRouteBase}${title}`}
      onMouseEnter={(e) => {
        manageModal(true, index, e.clientX, e.clientY);
      }}
      onMouseLeave={(e) => {
        manageModal(false, index, e.clientX, e.clientY);
      }}
      className="project"
    >
      <h2 className="project-title">{title}</h2>
      <p className="project-description">{type || typeLabelFallback}</p>
    </Link>
  );
};
