import React, { Component } from 'react'

export default class FilmPoster extends Component {
  render() {
    const posterUrl="https://image.tmdb.org/t/p/w780/"+this.props.poster
console.log(posterUrl)
    return (



<div className="film-poster">
<img src={posterUrl} alt="" />


</div>

)
}
}

