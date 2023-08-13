export const initialFilterState = {
  searchvalue:
    JSON.parse(localStorage.getItem("filteredValue"))?.searchvalue || "",
  genre:
    JSON.parse(localStorage.getItem("filteredValue"))?.genre || "All Genre",
  year: JSON.parse(localStorage.getItem("filteredValue"))?.year || "",
  rating: JSON.parse(localStorage.getItem("filteredValue"))?.rating || "",
};

export default function FilterReducer(state, { type, payload }) {
  switch (type) {
    case "FILTER_BY_SEARCH": {
      return { ...state, searchvalue: payload };
    }
    case "FILTER_BY_GENRE": {
      return { ...state, genre: payload };
    }
    case "FILTER_BY_YEAR": {
      // console.log(state);
      return { ...state, year: payload };
    }
    case "FILTER_BY_RATING": {
      return { ...state, rating: payload };
    }
    case "UPDATE_LOCAL_STORAGE": {
      localStorage.removeItem("filteredValue");
      localStorage.setItem("filteredValue", JSON.stringify(state));
      return state;
    }
    default:
      return state;
  }
}
