import Filter from "../Component/filter";
import Header from "../Component/header";
import MovieCard from "../Component/movieCard";
import { UseFilterContext } from "../Context/filterContext";
import { useMovieContext } from "../Context/movieContext";
import filterHelper from "../Utils/filterHelper";
import styles from "./home.module.css";

export default function Home() {
  const {
    movieState: { movieData },
  } = useMovieContext();
  const { filterState } = UseFilterContext();
  const filteredMovie = filterHelper(movieData, filterState);

  return (
    <div className={styles.homePage}>
      <Header />
      <Filter />
      {filteredMovie.length > 0 ? (
        <div className={styles.movies}>
          {filteredMovie?.map((data) => (
            <MovieCard key={data.id} movie={data} />
          ))}
        </div>
      ) : (
        <h1>No Movie Found</h1>
      )}
    </div>
  );
}
