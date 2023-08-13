const filterBySearch = (allMovie, { searchvalue }) => {
  if (searchvalue.length === 0) return allMovie;
  else {
    const input = searchvalue.toLowerCase();
    // console.log(searchvalue);

    return allMovie.filter(
      (movie) =>
        movie.title.toLowerCase().includes(input) ||
        movie.director.toLowerCase().includes(input) ||
        movie.cast
          .join()
          .toLowerCase()
          .replace(",", " ")
          .replace(/\s/g, "")
          .includes(input)
    );
  }
};
const filterByRating = (allMovie, { rating }) => {
  if (rating) {
    return allMovie.filter((movie) => movie.rating === +rating);
  } else return allMovie;
};
const filterByGenre = (allMovie, { genre }) => {
  if (genre === "All Genre") return allMovie;
  else return allMovie.filter((movie) => movie.genre.join().includes(genre));
};
const filterByYear = (allMovie, { year }) => {
  if (year.length === 0) return allMovie;
  else return allMovie.filter((movie) => movie.year === +year);
};

export default function filterHelper(allMovie, filterState) {
  const filterArray = [
    filterBySearch,
    filterByRating,
    filterByGenre,
    filterByYear,
  ];
  filterArray.forEach(
    (currentFunction) => (allMovie = currentFunction(allMovie, filterState))
  );
  return allMovie;
  // console.log(allMovie);
}
