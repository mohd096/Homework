import React, { Component } from 'react'
import FilmListing from './FilmListing'
import FilmDetails from './FilmDetails'
// import FilmPoster from './FilmPoster'
import TMDB from './TMDB'

export default class App extends Component {
  render() {
    
    // const allFilms = this.props.TMDB.films.map (
    //   film => (
    //     // I can call another component multiple times with different set of data
    //     // <film film= {film}/>
    //     <FilmListing film={film} />
        
    //   )
    // )
    return (
      <div className="film-library">
          
        <FilmListing films={TMDB.films}/>
        <FilmDetails/>
      </div>

  

    )
  }
}
