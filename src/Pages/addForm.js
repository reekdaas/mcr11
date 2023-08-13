import { useState } from "react";
import styles from "./addForm.module.css";
import Header from "../Component/header";
import { v4 as uuid } from "uuid";
import { useMovieContext } from "../Context/movieContext";

const inputsArray = [
  "title",
  "year",
  "genre",
  "rating",
  "director",
  "cast",
  "summary",
  "imageURL",
];

export function Input({ value, handleChange, initialValue }) {
  return (
    <div className={styles.rowDiv}>
      {" "}
      <label htmlFor={value}>{value}</label>
      <input
        type="text"
        name={value}
        onChange={handleChange}
        id={value}
        value={initialValue}
        required
      />
    </div>
  );
}

export default function AddForm() {
  const { movieDispatch } = useMovieContext();

  const [formData, setFormData] = useState({
    title: "",
    year: "",
    genre: "",
    rating: "",
    director: "",
    cast: "",
    summary: "",
    imageURL: "",
  });
  const handleFormdataChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    movieDispatch({ type: "ADD_MOVIE", payload: { ...formData, id: uuid() } });
  };
  console.log(formData);
  return (
    <div className={styles.addMovie}>
      <Header />
      <h1>Add Movie</h1>
      <form onSubmit={handleSubmit}>
        {inputsArray.map((data, i) => (
          <Input
            value={data}
            key={i}
            initialValue={formData[data]}
            handleChange={handleFormdataChange}
          />
        ))}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
