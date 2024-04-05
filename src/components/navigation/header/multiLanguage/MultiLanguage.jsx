import usImg from "../../../../assets/lng/Us.png";
import geImg from "../../../../assets/lng/Ge.png";

import Select from "react-select";
import { useTranslation } from "react-i18next";
import "./MultiLanguage.scss";

export const MultiLanguage = () => {
  const { i18n } = useTranslation();
  const lng = [
    { id: 1, code: "en", name: "EN", img: usImg },
    { id: 2, code: "ka", name: "GE", img: geImg },
  ];

  const defaultLanguage = lng.find((item) => item.code === "en");

  return (
    <div className="select-language">
      <Select
        className="select"
        classNamePrefix="custom-select"
        options={lng.map((item) => ({
          value: item.code,
          label: (
            <div style={{ display: "flex", alignItems: "center" }}>
              <span className="lng-text">{item.name}</span>
            </div>
          ),
        }))}
        defaultValue={{
          value: defaultLanguage.code,
          label: defaultLanguage.name,
        }}
        onChange={(selectedOption) => i18n.changeLanguage(selectedOption.value)}
      />
    </div>
  );
};
