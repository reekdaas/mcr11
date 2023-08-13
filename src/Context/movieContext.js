import { createContext, useContext, useReducer } from "react";
import movieReducer, { initialMovieState } from "./movieReducer";

export const MovieContext = createContext(null);

export default function MovieContextProvider({ children }) {
  const [movieState, movieDispatch] = useReducer(
    movieReducer,
    initialMovieState
  );
  const value = { movieState, movieDispatch };
  // console.log(movieState);
  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
}

export function useMovieContext() {
  return useContext(MovieContext);
}
