import { createContext, useContext, useReducer } from "react";
import FilterReducer, { initialFilterState } from "./filterReducer";

export const FilterContext = createContext(null);

export default function FilterContextProvider({ children }) {
  const [filterState, filterDispatch] = useReducer(
    FilterReducer,
    initialFilterState
  );

  const value = { filterState, filterDispatch };
  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
}

export function UseFilterContext() {
  return useContext(FilterContext);
}
