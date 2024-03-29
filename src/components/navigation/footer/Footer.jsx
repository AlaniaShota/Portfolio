import "./Footer.scss";

export const Footer = () => {
  const footerData = [
    {
      id: 1,
      title: "FaceBook",
      link: "",
    },
    {
      id: 2,
      title: "Instagram",
      link: "",
    },
    {
      id: 3,
      title: "LinkedIn",
      link: "",
    },
    {
      id: 4,
      title: "GitHub",
      link: "",
    },
  ];

  return (
    <div className="footer">
      {footerData.map((item) => (
        <a href={item.link} key={item.id} className="footer-links">
          {item.title}
        </a>
      ))}
    </div>
  );
};
