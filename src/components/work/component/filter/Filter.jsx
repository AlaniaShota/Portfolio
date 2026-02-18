import { FilterButton, UIFilter } from "./component";

import "./Filter.scss";

export const Filter = ({ search, setCustomComponent }) => {
  return (
    <div className="filter-container">
      <FilterButton search={search} />
      <UIFilter setCustomComponent={setCustomComponent} />
    </div>
  );
};
