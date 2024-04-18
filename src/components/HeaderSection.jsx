import "./style/HeaderSection.scss";

export const HeaderSection = ({
  title,
  widthAboutSectionClass,
  widthWorkSectionClass,
}) => {
  console.log(widthAboutSectionClass);
  return (
    <div
      className={`about-header-title-content ${widthAboutSectionClass} ${widthWorkSectionClass}`}
    >
      <h1 className="about-header-title">{title}</h1>
    </div>
  );
};
