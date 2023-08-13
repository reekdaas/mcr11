import { useNavigate } from "react-router-dom";
import styles from "./moviecard.module.css";
import { useMovieContext } from "../Context/movieContext";
import { alreadyPresentInStar } from "../Utils/utilsFunction";

export default function MovieCard({ movie }) {
  const navigate = useNavigate();
  const {
    movieState: { starredMovies },
    movieDispatch,
  } = useMovieContext();

  const isPresent = alreadyPresentInStar(starredMovies, movie);
  const handleStarClick = () => {
    if (isPresent) movieDispatch({ type: "REMOVE_FROM_STAR", payload: movie });
    else movieDispatch({ type: "ADD_TO_STAR", payload: movie });
  };

  return (
    <div className={styles.movieCard}>
      <img
        src={movie.imageURL}
        alt={movie.name}
        onClick={() => {
          navigate(`/moviedetails/${movie.id}`);
        }}
      />
      <h2>{movie.title}</h2>
      <p>{movie.summary}</p>
      <div className={styles.btn}>
        <button onClick={handleStarClick}>
          {isPresent ? " Starred " : "Star"}
        </button>
        <button>Add To Wishlist</button>
      </div>
    </div>
  );
}
