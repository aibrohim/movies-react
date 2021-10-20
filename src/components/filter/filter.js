import Input from "../input/input";

function Filter() {
  return (
    <section className="mb-4">
      <h2 className="sr-only">Movie search form</h2>
      <form className="js-search-form" action="https://echo.htmlacademy.ru" method="GET" autoComplete="off">
        <div className="form-group">
          <Input placeholder="Search" name="search" type="search" />
          {/* <input className="form-control js-search-form__title-input" type="search" name="title" placeholder="Avengers" aria-label="Title" /> */}
        </div>
        <div className="form-group">
          <Input type="number" step="any" name="min_rating" placeholder="7.5" defaultValue={5} aria-label="Minimum rating" />
          {/* <input className="form-control js-search-form__rating-input" type="number" step="any" name="min_rating" placeholder="7.5" defaultValue={5} aria-label="Minimum rating" /> */}
        </div>
        <div className="form-group">
          <select className="form-control js-search-form__genre-select" defaultValue="All" name="genre" aria-label="Genre">
            <option value="All">All</option>
          </select>
        </div>
        <div className="form-group">
          <select className="form-control js-search-form__sort-select" name="sort" aria-label="Sorting">
            <option value="rating_desc" selected>Rating (high to low)</option>
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