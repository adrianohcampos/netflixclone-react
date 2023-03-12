import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Tmdb from "../../Tmdb";
import FeaturedMovie from '../../components/FeaturedMovie'

// import './Home.css';

const Title = () => {

  const { id } = useParams();
  const [watchData, setwatchData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {

      // pegando featured      
      let chosenInfo = await Tmdb.getMovieInfo(id, 'tv');

      setwatchData(chosenInfo)
    }

    loadAll()
  }, [id])


  return (
    <div className="page">

      {watchData &&
        <FeaturedMovie item={watchData} />
      }

      <footer>
        Feito com <span role="img" aria-label="coração">❤</span>  by Adriano Campos
      </footer>

    </div>
  );
}

export default Title;