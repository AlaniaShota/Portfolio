import { FilterButton, UIFilter } from "./component";

import "./Filter.scss";

export const Filter = ({ search, categoryFilter, setCustomComponent }) => {
  return (
    <div className="filter-container">
      <FilterButton search={search} categoryFilter={categoryFilter} />
      <UIFilter setCustomComponent={setCustomComponent} />
    </div>
  );
};
