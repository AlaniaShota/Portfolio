import { Rounded } from "../../../../Rounded";

import { useEffect, useState } from "react";
import "./style/FilterButton.scss";

export const FilterButton = ({ search, categoryFilter }) => {
  const [activeButton, setActiveButton] = useState(() => {
    const savedType = localStorage.getItem("activeType");
    return savedType ? savedType : "All";
  });

  const handleButtonClick = (type) => {
    setActiveButton(type);
    search(type === "All" ? {} : { type });
    localStorage.setItem("activeType", type);
  };

  useEffect(() => {
    const handleStorageChange = () => {
      const savedType = localStorage.getItem("activeType");
      if (savedType && savedType !== activeButton) {
        setActiveButton(savedType);
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [activeButton]);

  return (
    <div className="filter-btn-section">
      <Rounded
        className={`filter-btn all-btn ${
          activeButton === "All" ? "active" : ""
        }`}
        onClick={() => handleButtonClick("All")}
      >
        <p className="filter-btn-text all-text-btn">All</p>
      </Rounded>
      <Rounded
        className={`filter-btn ${activeButton === "ReactJS" ? "active" : ""}`}
        onClick={() => handleButtonClick("ReactJS")}
      >
        <p className="filter-btn-text">React</p>
      </Rounded>
      <Rounded
        className={`filter-btn ${activeButton === "Lending" ? "active" : ""}`}
        onClick={() => handleButtonClick("Lending")}
      >
        <p className="filter-btn-text">Lending</p>
      </Rounded>
    </div>
  );
};
