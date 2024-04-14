import { Magnetic } from "../../Magnetic";

import { t } from "i18next";

import "./Footer.scss";
export const Footer = () => {
  const socialMediaData = [
    {
      id: 1,
      title: "Instagram",
      link: "https://www.instagram.com/alania126/",
    },
    {
      id: 2,
      title: "Linkedin",
      link: "https://www.linkedin.com/in/shota-alania-0a705820b/",
    },
    {
      id: 3,
      title: "GitHub",
      link: "https://github.com/AlaniaShota",
    },
  ];

  return (
    <div className="contact-information">
      <div>
        <span>
          <h3>{t("version")}</h3>
          <p>2022 © Edition</p>
        </span>
        <span>
          <h3>{t("code")}</h3>
          <a href="https://dennissnellenberg.com/" target="_blank">
            <p>Dennis Snellenberg</p>
          </a>
        </span>
      </div>
      <div>
        <span>
          <h3>{t("socials")}</h3>
          <a
            href="https://www.facebook.com/profile.php?id=100006923223734"
            target="_blank"
          >
            <Magnetic>
              <p>Facebook</p>
            </Magnetic>
          </a>
        </span>
        {socialMediaData.map((item) => (
          <a href={item.link} target="_blank" key={item.id}>
            <Magnetic>
              <p>{item.title}</p>
            </Magnetic>
          </a>
        ))}
      </div>
    </div>
  );
};
