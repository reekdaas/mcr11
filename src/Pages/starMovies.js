import Header from "../Component/header";
import MovieCard from "../Component/movieCard";
import { useMovieContext } from "../Context/movieContext";
import styles from "./starMovie.module.css";

export default function StarMovies() {
  const {
    movieState: { starredMovies },
  } = useMovieContext();

  return (
    <div className={styles.starMoviePage}>
      <Header />

      {starredMovies.length > 0 ? (
        <div className={styles.starMovies}>
          {starredMovies.map((data) => (
            <MovieCard movie={data} key={data.id} />
          ))}
        </div>
      ) : (
        <h1>No Star Movie Found</h1>
      )}
    </div>
  );
}
