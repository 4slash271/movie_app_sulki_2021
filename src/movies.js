import React from "react";
import PropTypes, { string } from "prop-types";
import "./Movies.css";


function Movie({id, year,title, summary, poster}){
    return (
    <div class ="movie">
        <img src = {poster} alt={title} title = {title}/>
      <div className="movie__data"> 
         <h3 className="movie__title" style = {{color:"charcoal"}}>{title}</h3>
         <h5 className="movie__year">{year}</h5>
         <p className ="movie__summary">{summary}</p>
         <ul className = "genres">{genres.map(genre => (<li className ="genres__genre">{genre}</li>))}</ul>
     </div>
     
    </div>);

}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title : PropTypes.string,
    summary : PropTypes.string,
    poster : PropTypes.string,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;