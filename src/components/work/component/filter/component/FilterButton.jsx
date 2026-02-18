import "./style/FilterButton.scss";
import { Rounded } from "../../../../Rounded";
import { workData } from "../../../../../mockData";

import { useEffect, useState } from "react";

export const FilterButton = ({ search }) => {
  const [activeButton, setActiveButton] = useState(() => {
    const savedType = localStorage.getItem(workData.filterConfig.storageKey);
    return savedType ? savedType : workData.filterConfig.defaultType;
  });

  const handleButtonClick = (type) => {
    setActiveButton(type);
    search(
      type === workData.filterConfig.defaultType
        ? {}
        : { [workData.filterConfig.queryKey]: type },
    );
    localStorage.setItem(workData.filterConfig.storageKey, type);
  };

  useEffect(() => {
    const handleStorageChange = () => {
      const savedType = localStorage.getItem(workData.filterConfig.storageKey);
      if (savedType && savedType !== activeButton) {
        setActiveButton(savedType);
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [activeButton]);

  return (
    <div className="filter-btn-section">
      {workData.filterConfig.options.map((option) => (
        <Rounded
          key={option.type}
          className={`filter-btn ${
            option.type === workData.filterConfig.defaultType ? "all-btn" : ""
          } ${option.className} ${
            activeButton === option.type ? "active" : ""
          }`}
          onClick={() => handleButtonClick(option.type)}
        >
          <p
            className={`filter-btn-text ${
              option.type === workData.filterConfig.defaultType
                ? "all-text-btn"
                : ""
            }`}
          >
            {option.label}
          </p>
        </Rounded>
      ))}
    </div>
  );
};
