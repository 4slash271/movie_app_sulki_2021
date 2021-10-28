import React from "react";
import PropTypes from "prop-types";


function Movie({id, year,title, summary, poster}){
    return (
    <div class ="movie">
        <img src = {poster} alt={title} title = {title}/>
      <div class="movie__data"> 
         <h3 class="movie__title" style = {{color:"charcoal"}}>{title}</h3>
         <h5 class="movie__year">{year}</h5>
         <p class ="movie__summary">{summary}</p>
     </div>
     
    </div>);

}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title : PropTypes.string,
    summary : PropTypes.string,
    poster : PropTypes.string,
}

export default Movie;