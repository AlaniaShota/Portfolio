import { Rounded } from "../../../Rounded";

import { FiLayers } from "react-icons/fi";
import { PiSquaresFour } from "react-icons/pi";

import "./FilterButton.scss";

export const FilterButton = () => {
  return (
    <div className="filter-container">
      <div className="filter-btn-section">
        <Rounded className="filter-btn all-btn">
          <p className="filter-btn-text all-text-btn">All</p>
        </Rounded>
        <Rounded className="filter-btn">
          <p className="filter-btn-text">React</p>
        </Rounded>
        <Rounded className="filter-btn">
          <p className="filter-btn-text">Lending</p>
        </Rounded>
      </div>
      <div className="icon-filter">
        <Rounded className="icon-filter-btn icon-filter-text">
          <FiLayers className="filter-icon" />
        </Rounded>
        <Rounded className="icon-filter-btn ">
          <PiSquaresFour className="filter-icon icon-filter-btn-img" />
        </Rounded>
      </div>
    </div>
  );
};
