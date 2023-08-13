export const alreadyPresentInStar = (starredMovies, movie) => {
  const starMovie = starredMovies.find((data) => data.id === movie.id);
  return starMovie ? true : false;
};
