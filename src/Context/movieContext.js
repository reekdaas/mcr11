import { createContext, useContext } from "react";

export const MovieContext = createContext(null);

export default function MovieContextProvider({ children }) {
  const value = {};

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
}

export function useMovieContext() {
  return useContext(MovieContext);
}
