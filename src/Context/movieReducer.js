import { movies } from "../Utils/data";

export const initialMovieState = {
  movieData: movies,
  genre: [],
};

export default function movieReducer(state, { type, payload }) {
  switch (type) {
    case "": {
    }

    default:
      return state;
  }
}
