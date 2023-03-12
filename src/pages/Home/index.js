import React, { useEffect, useState } from "react";
import Tmdb from "../../Tmdb";
import MovieRow from '../../components/MovieRow'
import FeaturedMovie from '../../components/FeaturedMovie'
import Helmet from "react-helmet";

import './Home.css';

const Home = () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setfeaturedData] = useState(null);


  useEffect(() => {
    const loadAll = async () => {
      // pegando lista de filmes
      let list = await Tmdb.getHomelist();
      setMovieList(list)

      // pegando featured
      let originals = list.filter(i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let chosen = originals[0].items.results[randomChosen]
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setfeaturedData(chosenInfo)
    }

    loadAll()
  }, [])



  return (
    <div className="page">

      <Helmet>
        <title>Netflix - Home</title>
        <meta name="description" content="Clone Netflix in React" />
      </Helmet>


      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        Feito com <span role="img" aria-label="coração">❤</span>  by Adriano Campos
      </footer>

      {movieList.length <= 0 &&
        <div className="loading">
          <img src="https://i.gifer.com/origin/36/36527397c208b977fa3ef21f68c0f7b2_w200.gif" alt="loading" />
        </div>
      }



    </div>
  );
}

export default Home;