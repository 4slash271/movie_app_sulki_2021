import React from "react";
import PropTypes from "prop-types";
import "./Movies.css";

function Movie({year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <ol className="genres">
          {genres&&genres.map((genre, index) => (
            <li key={index} className="genres__genre">
              {genre}
            </li>
          ))}
        </ol>
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <p className="movie__summary">{summary}</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string,
  summary: PropTypes.string,
  poster: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
};

export default Movie;
