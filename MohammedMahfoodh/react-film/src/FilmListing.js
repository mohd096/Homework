import React, { Component } from 'react'
import FilmRow from './FilmRow'
// import FilmPoster from './FilmPoster'
// import TMDB from './TMDB'
export default class FilmListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFilter: 'ALL',
    };
  }

  handleFilterClick = (filter) => {
    this.setState({ currentFilter: filter });
  };
  render() {
    const { films } = this.props;
    const { currentFilter } = this.state;

    const filteredFilms = currentFilter === 'FAVES'
      ? films.filter(film => film.isFavorite)
      : films;

    const filmRows = filteredFilms.map(film => (
      <FilmRow key={film.id} film={film} />
    ));

    // let allFilms = this.props.films.map( (film, index) => (TMDB),
    // film => (
    //   <film film = {film}/>
    // ))

    const allFilms = this.props.films.map (
      film => (<FilmRow film={film}/>
       )
    )
        // I can call another component multiple times with different set of data
        
        // <FilmListing film={film} />
        // <film film = {film}/>
        
     
    return (
<div className="film-list">
    <h1 className="section-title">FILMS</h1>
    <div className="film-list-filters">
        <div className="film-list-filter">
        <span
              className={currentFilter === 'ALL' ? 'active' : ''}
              onClick={() => this.handleFilterClick('ALL')}
            >
          
            ALL
            </span>
            <span className="section-count">{this.props.films.length}</span>
        </div>
        <div className="film-list-filter">
        <span
              className={currentFilter === 'FAVES' ? 'active' : ''}
              onClick={() => this.handleFilterClick('FAVES')}
            >
              FAVES
            </span>
            <span className="section-count">0</span>
        </div>
    </div>

    {allFilms}
</div>

    )
  }
}
