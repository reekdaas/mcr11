import { Route, Routes } from "react-router-dom";
import Home from "./Pages/home";
import MovieDetails from "./Pages/moviedetails";
import StarMovies from "./Pages/starMovies";
import AddForm from "./Pages/addForm";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/moviedetails/:id" element={<MovieDetails />} />
      <Route path="/starmovies" element={<StarMovies />} />
      <Route path="/addform" element={<AddForm />} />
    </Routes>
  );
}
