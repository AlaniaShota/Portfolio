import { Rounded } from "../../../../Rounded";

import { FiLayers } from "react-icons/fi";
import { PiSquaresFour } from "react-icons/pi";
import { useState } from "react";
import "./style/UIFilter.scss";

export const UIFilter = ({ setCustomComponent }) => {
  const [activeButton, setActiveButton] = useState("B");
  const buttonData = [
    { type: "A", icon: <FiLayers className="filter-icon" /> },
    { type: "B", icon: <PiSquaresFour className="filter-icon" /> },
  ];

  const handleItemClick = (componentType) => {
    setActiveButton(componentType);
    setCustomComponent(componentType);
  };

  return (
    <div className="icon-filter">
      {buttonData.map((button) => (
        <Rounded
          key={button.type}
          onClick={() => handleItemClick(button.type)}
          className={`icon-filter-btn ${
            activeButton === button.type ? "active" : ""
          }`}
        >
          {button.icon}
        </Rounded>
      ))}
    </div>
  );
};
