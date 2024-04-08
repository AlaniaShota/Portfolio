import "./style/HeaderSection.scss";

export const HeaderSection = ({ title }) => {
  return (
    <div className="about-header-title-content">
      <h1 className="about-header-title">{title}</h1>
    </div>
  );
};
