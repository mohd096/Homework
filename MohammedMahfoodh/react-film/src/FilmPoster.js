import React from 'react';

export default function FilmPoster(props) {
  const posterUrl = "https://image.tmdb.org/t/p/w780/" + props.poster;
  console.log(posterUrl);

  return (
    <div className="film-poster">
      <img src={posterUrl} alt="" />
    </div>
  );
}
