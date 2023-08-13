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
      let newGenre;
      const newMovie = [...state.movieData, payload];
      const isGenrePresnt = state.movieData.find(
        (movie) => movie.genre === payload.genre
      );
      // console.log(isGenrePresnt);
      if (isGenrePresnt) {
        newGenre = state.genre;
      } else {
        newGenre = [...state.genre, isGenrePresnt?.genre];
      }

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
