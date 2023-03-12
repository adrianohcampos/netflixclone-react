import React from "react";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import './FeaturedMovie.css';

const FeaturedMovie = ({ item }) => {
  const {
    backdrop_path,
    name,
    vote_average,
    first_air_date,
    number_of_seasons,
    id,
    overview
  } = item;

  const getTruncatedDescription = (overview) => {
    if (overview.length > 200) {
      return `${overview.substring(0, 200)}..`;
    }
    return overview;
  }

  const truncatedDescription = getTruncatedDescription(overview);
  const releaseYear = new Date(first_air_date).getFullYear();
  const pluralSeasons = number_of_seasons !== 1 ? 's' : '';
  let points = Math.round(vote_average * 10) / 10;
  return (
    <section className="featured" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})` }}>
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{name}</div>
          <div className="featured--info">
            <div className="featured--point">{points} pontos</div>
            <div className="featured--year">{releaseYear}</div>
            <div className="featured--seasons">{number_of_seasons} temporada{pluralSeasons}</div>
          </div>
          <div className="featured--description">{truncatedDescription}</div>
          <div className="featured--buttons">
            <a href={`/watch/${id}`} className="featured--watchbutton"><PlayArrowIcon style={{ fontSize: 40 }} /> Assistir</a>
            <a href={`/title/${id}`} className="featured--titlebutton"><ErrorOutlineIcon style={{ fontSize: 40 }} /> Mais Informações</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedMovie;
