import { UseFilterContext } from "../Context/filterContext";
import styles from "./header.module.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  const { filterState, filterDispatch } = UseFilterContext();

  const handleChange = (e) => {
    filterDispatch({ type: "FILTER_BY_SEARCH", payload: e.target.value });
    filterDispatch({ type: "UPDATE_LOCAL_STORAGE" });
  };

  return (
    <div className={styles.header}>
      <h2>IMDB</h2>
      <div className={styles.input}>
        <label htmlFor="search"></label>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search Movie by Title,Cast,director "
          onChange={handleChange}
          value={filterState.searchvalue}
        />
      </div>
      <div className={styles.linkContainer}>
        <ul>
          <li>
            <NavLink className={styles.link} to="/">
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.link}>Watchlist</NavLink>
          </li>
          <li>
            <NavLink className={styles.link} to="/starmovies">
              StarredMovies
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
