import { movies } from "../Utils/data";

export const initialMovieState = {
  movieData: JSON.parse(localStorage.getItem("movieList")) || movies,
  watchListMovies: [],
  starredMovies: JSON.parse(localStorage.getItem("starredMovies")) || [],
  genre: [
    "Action",
    "Crime",
    "Drama",
    "Fantasy",
    "Romance",
    "Adventure",
    "Sci-Fi",
    "Biography",
  ],
};

export default function movieReducer(state, { type, payload }) {
  switch (type) {
    case "ADD_MOVIE": {
      const newMovie = [...state.movieData, payload];
      localStorage.removeItem("movieList");
      localStorage.setItem("movieList", JSON.stringify(newMovie));

      return { ...state, movies: newMovie };
    }

    case "ADD_TO_STAR": {
      const newStarredmovies = [...state.starredMovies, payload];
      localStorage.setItem("starredMovies", JSON.stringify(newStarredmovies));
      return { ...state, starredMovies: newStarredmovies };
    }
    case "REMOVE_FROM_STAR": {
      const newStarredmovies = state.starredMovies.filter(
        (data) => data.id !== payload.id
      );
      localStorage.removeItem("starredMovies");
      localStorage.setItem("starredMovies", JSON.stringify(newStarredmovies));
      return { ...state, starredMovies: newStarredmovies };
    }

    default:
      return state;
  }
}
