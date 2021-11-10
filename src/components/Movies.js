import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movies.css";

function Movie({year, title, summary, poster, genres }) {
  return (
    <Link to={{
      pathname:"/movie-detail",
      state:{
        year, 
        title, 
        summary, 
        poster, 
        genres
      }
    }}>
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <ul className="movie__genres">
          {genres&&genres.map((genre, index) => (
            <li key={index} className="genres__genre">
              {genre}
            </li>
          ))}
        </ul>
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <p className="movie__summary">{summary.slice(0,180)}...</p>
      </div>
    </div>
    </Link>
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
