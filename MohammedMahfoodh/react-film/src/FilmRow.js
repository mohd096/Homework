import React from 'react'
import FilmPoster from './FilmPoster';
import Fave from './Fave';
import FilmDetails from './FilmDetails';

export default function FilmRow(props)  {
    // handleDetailsClick = (film) => {
    //     console.log(`Fetching details for ${film.title}`);
    //   };

    const { film, onFaveToggle, isFave  } = props;

// const posterURL="https://image.tmdb.org/t/p/w780/"+this.props.film.poster_path
const fullYear = new Date (props.film.release_date);
// console.log(posterURL)

console.log(fullYear.getFullYear());
    return (
      <div>
       {/* <div>{props.film.id}</div>  */}
       <div className="film-row" >

  {/* <img src={posterURL} alt="" /> */}
  <FilmPoster poster={props.film.poster_path}/>

  <div className="film-summary">
    <h1>{props.film.title}</h1>
    <p>{new Date(film.release_date).getFullYear()}</p>
  </div>
  <Fave isFave={isFave}
        onFaveToggle={onFaveToggle}/>

<FilmDetails
  film={film}
  onDetailsClick={props.onDetailsClick}
/>
</div>
      </div>
    )
  }

