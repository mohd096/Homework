import React, { Component } from 'react'
import FilmPoster from './FilmPoster';
import Fave from './Fave';

export default class FilmRow extends Component {
    handleDetailsClick = (film) => {
        console.log(`Fetching details for ${film.title}`);
      };
  render() {
// const posterURL="https://image.tmdb.org/t/p/w780/"+this.props.film.poster_path
const fullYear = new Date (this.props.film.release_date);
// console.log(posterURL)

console.log(fullYear.getFullYear());
    return (
      <div>
       {/* <div>{this.props.film.id}</div>  */}
       <div className="film-row" onClick={() => this.handleDetailsClick(this.props.film)}>

  {/* <img src={posterURL} alt="" /> */}
  <FilmPoster poster={this.props.film.poster_path}/>

  <div className="film-summary">
    <h1>{this.props.film.title}</h1>
    <p>{fullYear.getFullYear()}</p>
  </div>
  <Fave/>
</div>
      </div>
    )
  }
}
