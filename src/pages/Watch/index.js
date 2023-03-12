import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from 'react-youtube'; //https://www.npmjs.com/package/react-youtube
import Tmdb from "../../Tmdb";
import Helmet from "react-helmet";

import './Watch.css';

const Watch = () => {

  const { id } = useParams();
  const [watchData, setwatchData] = useState(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [videoId, setVideoId] = useState('6yzRr3SGuv0');

  useEffect(() => {
    const loadAll = async () => {        
      let chosenInfo = await Tmdb.getMovieInfo(id, 'tv');

      let trailer = chosenInfo.videos.results.filter(i => i.type === 'Trailer');      
      
      if(trailer.length === 0 && chosenInfo.videos.results.length > 0) {
        trailer.push(chosenInfo.videos.results[0])
      } 
      
      if(trailer.length > 0) {
        handleVideoChange(trailer[0].key)          
      } else {
        handleVideoChange(videoId)
      }
      
      setwatchData(chosenInfo)
          
    }
    loadAll()
  }, [id, videoId])

  // const handlePlayPause = () => {
  //   setIsPlaying(!isPlaying);
  // };

  const handleVideoChange = (newVideoId) => {
    setVideoId(newVideoId);
    setIsPlaying(true);
  };  

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
      modestbranding:1,
      rel:0,      
      showinfo: 0,
      controls: 2,
      enablejsapi:1,
      iv_load_policy:3,
      origin:"localhost"
    },
  };    

  return (
    <div className="page">
      
      {watchData &&
        <Helmet>
          <title>Netflix - {watchData?.name}</title>
          <meta name="description" content="Clone Netflix in React"/>
        </Helmet>
      }                 
      
      {isPlaying ? (       

        <YouTube
          videoId={videoId}
          className="playerYoutube"
          title={watchData?.name}          
          opts={opts}         
         
        />

      ) : (
        <div className="loading">
          <img src="https://i.gifer.com/origin/36/36527397c208b977fa3ef21f68c0f7b2_w200.gif" alt="loading" />
        </div>
      )}  
       
    </div>   
  );
}

export default Watch;