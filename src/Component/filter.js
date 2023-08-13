import { useNavigate } from "react-router-dom";
import { UseFilterContext } from "../Context/filterContext";
import { useMovieContext } from "../Context/movieContext";
import styles from "./filter.module.css";

export function Select({ name, arr, initialValue, handleChange }) {
  return (
    <select
      name={name}
      id={name}
      value={initialValue}
      onChange={(e) => {
        handleChange(e.target.value);
      }}
    >
      {arr.map((data) => (
        <option value={data} key={data}>
          {data}
        </option>
      ))}
    </select>
  );
}

export default function Filter() {
  const navigate = useNavigate();
  const {
    movieState: { genre },
  } = useMovieContext();
  const { filterState, filterDispatch } = UseFilterContext();

  const years = Array.from({ length: 2023 - 1991 }, (_, i) => 1991 + i + 1);
  const ratings = Array.from({ length: 10 }, (_, i) => i + 1);
  // console.log(filterState);
  const handleFilterByYear = (value) => {
    filterDispatch({ type: "FILTER_BY_YEAR", payload: value });
    filterDispatch({ type: "UPDATE_LOCAL_STORAGE" });
  };
  const handleFilterByRating = (value) => {
    filterDispatch({ type: "FILTER_BY_RATING", payload: value });
    filterDispatch({ type: "UPDATE_LOCAL_STORAGE" });
  };

  return (
    <div className={styles.filterComponent}>
      <h1>Movies</h1>
      <select
        name="genre"
        value={filterState.genre}
        onChange={(e) => {
          filterDispatch({ type: "FILTER_BY_GENRE", payload: e.target.value });
          filterDispatch({ type: "UPDATE_LOCAL_STORAGE" });
        }}
      >
        <option value="All Genre">All Genre</option>
        {genre.map((data, i) => (
          <option key={i} value={data}>
            {data}
          </option>
        ))}
      </select>
      <Select
        name="year"
        arr={years}
        handleChange={handleFilterByYear}
        initialValue={filterState.year}
      />
      <Select
        name="rating"
        arr={ratings.toReversed()}
        initialValue={filterState.rating}
        handleChange={handleFilterByRating}
      />
      <button
        onClick={() => {
          navigate("/addform");
        }}
      >
        Add New
      </button>
    </div>
  );
}
