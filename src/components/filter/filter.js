import { useRef } from "react";
import Input from "../input/input";
import Select from "../select/select";

function Filter({onSubmit}) {
  const titleRef = useRef();
  const ratingRef = useRef();
  const genreRef = useRef();
  const sortRef = useRef();

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    onSubmit({
      title: titleRef.current.value,
      rating: ratingRef.current.value,
      genre: genreRef.current.value,
      sort: sortRef.current.value
    });
  }

  return (
    <section className="mb-4">
      <h2 className="sr-only">Movie search form</h2>
      <form onSubmit={handleFormSubmit} className="js-search-form" action="https://echo.htmlacademy.ru" method="GET" autoComplete="off">
        <div className="form-group">
          <Input ref={titleRef} placeholder="Search" name="search" type="search" />
        </div>
        <div className="form-group">
          <Input ref={ratingRef} type="number" step="any" name="min_rating" placeholder="7.5" defaultValue={5} aria-label="Minimum rating" />
        </div>
        <div className="form-group">
          <Select ref={genreRef} name="genre" aria-label="Select genre">
            <option value="All">All</option>
            <option value="0">Kino</option>
            <option value="1">Multik</option>
          </Select>
        </div>
        <div className="form-group">
          <select ref={sortRef} defaultValue="rating_desc" className="form-control js-search-form__sort-select" name="sort" aria-label="Sorting">
            <option value="rating_desc">Rating (high to low)</option>
            <option value="rating_asc">Rating (low to high)</option>
            <option value="az">A-Z</option>
            <option value="za">Z-A</option>
            <option value="year_desc">Year (new to old)</option>
            <option value="year_asc">Year (old to new)</option>
          </select>
        </div>
        <button className="btn btn-primary btn-block" type="submit">Search</button>
      </form>
    </section>
  );
}

export default Filter;