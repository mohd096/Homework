import axios from 'axios'
import React, { Component } from 'react'
import './App.css'
import FilmListing from './FilmListing'
import FilmDetails from './FilmDetails'
// import FilmPoster from './FilmPoster'
import TMDB from './TMDB'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: TMDB.films,
      faves: [],
      current: {},

    }
    this.handleFaveToggle = this.handleFaveToggle.bind(this)

  }

  handleDetailsClick = (film) => {
    console.log(`Fetching details for ${film.title}`);
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`

    axios({
      method: 'GET',
      url: url
    }).then(response => {
      console.log(response) // take a look at what you get back!
    })
    
    this.setState({ selectedFilm: film });
  };
  

  handleFaveToggle = (film) => {
    const { faves } = this.state;
    const newFaves = faves.slice(); // Create a copy of faves array
    const filmIndex = newFaves.indexOf(film);

    if (filmIndex !== -1) {
      newFaves.splice(filmIndex, 1); // Remove film from faves array
      console.log(`Removing ${film.title} from faves...`);
    } else {
      newFaves.push(film); // Add film to faves array
      console.log(`Adding ${film.title} to faves...`);
    }

    this.setState({ faves: newFaves }); // Update the faves state
  };

  render() {
    const { films, faves, current } = this.state;
    // const myString = "The ${film.id} is great"
    
    // const allFilms = this.props.TMDB.films.map (
    //   film => (
    //     // I can call another component multiple times with different set of data
    //     // <film film= {film}/>
    //     <FilmListing film={film} />
        
    //   )
    // )
    return (
      // <div className="App" >
        <div className="film-library">
          <FilmListing films={films} faves={faves} onFaveToggle={this.handleFaveToggle} onDetailsClick={this.handleDetailsClick} />
          <FilmDetails film={current}  />
        {/* </div> */}
      </div>

  

    )
  }
}
