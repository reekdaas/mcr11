import { useParams } from "react-router-dom";
import Header from "../Component/header";
import { useMovieContext } from "../Context/movieContext";
import styles from "./moviedetails.module.css";
import { alreadyPresentInStar } from "../Utils/utilsFunction";

export default function MovieDetails() {
  const { id } = useParams();
  const {
    movieState: { movieData, starredMovies },
    movieDispatch,
  } = useMovieContext();

  const movie = movieData.find((data) => data.id === +id);

  const isPresent = alreadyPresentInStar(starredMovies, movie);
  const handleStarClick = () => {
    if (isPresent) movieDispatch({ type: "REMOVE_FROM_STAR", payload: movie });
    else movieDispatch({ type: "ADD_TO_STAR", payload: movie });
  };

  return (
    <div className={styles.moviedetailsPage}>
      <Header />
      <div className={styles.movieDetails}>
        <img src={movie.imageURL} alt={movie.title} />
        <div className={styles.movideData}>
          <h1>{movie.title}</h1>
          <p>{movie.summary}</p>
          <p>Year: {movie.year}</p>
          <p>Genre: {movie.genre.join(",")}</p>
          <p>Director: {movie.director}</p>
          <p>Rating: {movie.rating}</p>
          <p>Cast: {movie.cast.join(",")}</p>

          <div className={styles.btn}>
            <button onClick={handleStarClick}>
              {" "}
              {isPresent ? "Starred" : "Star"}{" "}
            </button>
            <button>Add To Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 

 {
    id: 1,
    title: "Redemption",
    year: 1994,
    genre: ["Drama"],
    rating: 9,
    director: "Frank Darabont",
    writer: "Stephen King",
    cast: ["Tim Robbins", "Morgan Freeman"],
    summary:
      "Two imprisoned men bond over several years, finding solace and eventual redemption through acts of common decency.",
    imageURL:
      "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
  },
*/
