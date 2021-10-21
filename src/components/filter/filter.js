import { useState } from "react";
import Input from "../input/input";
import Select from "../select/select";

import allMovies from "../../normalized-movies";

function Filter({setMovies}) {
  const [selectValue, setSelectValue] = useState();
  const [ inputValue, setInputValue ] = useState("");
  console.log(inputValue);


  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    const titleRegExp = new RegExp(inputValue, "gi");
    const filtredMovies = allMovies.filter((movie) => movie.title.match(titleRegExp));
    setMovies(filtredMovies);
  }

  const handleSortChange = (evt) => {
    setSelectValue(evt.target.value);
    console.log(selectValue);
  }

  const handleSearchChange = (evt) => {
    setInputValue(evt.target.value);
  };

  // Inputga matn kiritiladi
  // 30dan oshib ketsa "No"
  // 30dan kam bo'ladigan bo'lsa "Okay"

  return (
    <section className="mb-4">
      <h2 className="sr-only">Movie search form</h2>
      <form onSubmit={handleFormSubmit} className="js-search-form" action="https://echo.htmlacademy.ru" method="GET" autoComplete="off">
        <div className="form-group">
          <Input onChange={handleSearchChange} placeholder="Search" name="search" type="search" />
          <p>{inputValue.length < 10 ? "Hammasi yaxshi" : "Chota ni to"}</p>
          {/* <input className="form-control js-search-form__title-input" type="search" name="title" placeholder="Avengers" aria-label="Title" /> */}
        </div>
        <div className="form-group">
          <Input type="number" step="any" name="min_rating" placeholder="7.5" defaultValue={5} aria-label="Minimum rating" />
          {/* <input className="form-control js-search-form__rating-input" type="number" step="any" name="min_rating" placeholder="7.5" defaultValue={5} aria-label="Minimum rating" /> */}
        </div>
        <div className="form-group">
          {/* <select className="form-control js-search-form__genre-select" defaultValue="All" name="genre" aria-label="Genre">
            <option value="All">All</option>
          </select> */}
          <Select name="genre" aria-label="Select genre">
            <option value="All">All</option>
            <option value="0">Kino</option>
            <option value="1">Multik</option>
          </Select>
        </div>
        <div className="form-group">
          <select onChange={handleSortChange} className="form-control js-search-form__sort-select" name="sort" aria-label="Sorting">
            <option value="rating_desc" selected>Rating (high to low)</option>
            <option value="rating_asc">Rating (low to high)</option>
            <option value="az">A-Z</option>
            <option value="za">Z-A</option>
            <option value="year_desc">Year (new to old)</option>
            <option value="year_asc">Year (old to new)</option>
          </select>
          <p>{3 > 2 ? "True" : "False"}</p>
        </div>
        <button className="btn btn-primary btn-block" type="submit">Search</button>
      </form>
    </section>
  );
}

export default Filter;