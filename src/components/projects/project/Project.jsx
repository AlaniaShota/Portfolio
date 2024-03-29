import "./Project.scss";

export const Project = ({ index, title, manageModal }) => {
  return (
    <div
      onMouseEnter={(e) => {
        manageModal(true, index, e.clientX, e.clientY);
      }}
      onMouseLeave={(e) => {
        manageModal(false, index, e.clientX, e.clientY);
      }}
      className="project"
    >
      <h2 className="project-title">{title}</h2>
      <p className="project-description">Design & Development</p>
    </div>
  );
};
