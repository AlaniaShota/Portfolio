import "./style/UIFilter.scss";
import { Rounded } from "../../../../Rounded";
import { workData } from "../../../../../mockData";

import { FiLayers } from "react-icons/fi";
import { PiSquaresFour } from "react-icons/pi";
import { useState } from "react";

export const UIFilter = ({ setCustomComponent }) => {
  const [activeButton, setActiveButton] = useState(workData.defaultComponent);
  const iconMap = {
    layers: FiLayers,
    squares: PiSquaresFour,
  };

  const handleItemClick = (componentType) => {
    setActiveButton(componentType);
    setCustomComponent(componentType);
  };

  return (
    <div className="icon-filter">
      {workData.uiFilterButtons.map((button) => {
        const Icon = iconMap[button.icon];
        return (
          <Rounded
            key={button.type}
            onClick={() => handleItemClick(button.type)}
            className={`icon-filter-btn ${
              activeButton === button.type ? "active" : ""
            }`}
          >
            {Icon ? <Icon className="filter-icon" /> : null}
          </Rounded>
        );
      })}
    </div>
  );
};
