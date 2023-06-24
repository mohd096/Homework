import React, { Component } from 'react'
import FilmRow from './FilmRow'
// import FilmPoster from './FilmPoster'
// import TMDB from './TMDB'
export default class FilmListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter : 'ALL',
    };
  }

  handleFilterClick = (filter) => {
    this.setState({ filter });
  };
  render() {
    const { films, faves } = this.props;
    const { filter  } = this.state;

    const filteredFilms =
    filter === 'FAVES'
      ? films.filter(film => faves.includes(film))
      : films;
      
    const filmRows = filteredFilms.map(film => (
      <FilmRow key={film.id} film={film} onFaveToggle={() => this.props.onFaveToggle(film)}
      isFave={faves.includes(film)} />
    ));

    // let allFilms = this.props.films.map( (film, index) => (TMDB),
    // film => (
    //   <film film = {film}/>
    // ))

    // const allFilms = this.props.films.map((film) => {
    //   return (
    //   <FilmRow
    //   film={film}
    //   key={film.id}
    //   onFaveToggle={() => this.props.onFaveToggle(film)}
    //   />
    // )
    // })
        // I can call another component multiple times with different set of data
        
        // <FilmListing film={film} />
        // <film film = {film}/>
        
     
    return (
<div className="film-list">
    <h1 className="section-title">FILMS</h1>
    <div className="film-list-filters">
    <div className={`film-list-filter ${this.state.filter === 'ALL' ? 'is-active' : ''}`}> <span
              onClick={() => this.handleFilterClick('ALL')}
            >
          
            ALL
            </span>
            <span className="section-count">{this.props.films.length}</span>
        </div>
        <div className={`film-list-filter ${this.state.filter === 'FAVES' ? 'is-active' : ''}`}>
        <span
              onClick={() => this.handleFilterClick('FAVES')}
            >
              FAVES
            </span>
            <span className="section-count">{faves.length}</span>
        </div>
    </div>
    {filmRows}
    {/* {allFilms} */}
</div>

    )
  }
}
