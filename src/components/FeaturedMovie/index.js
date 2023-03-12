import React from "react";

import './FeaturedMovie.css';

const FeaturedMovie = ({item}) => {  
    
    let fisrtDate = new Date(item.first_air_date);
    
    let description = item.overview
    if(description.length > 200) {
        description = description.substring(0,200,'..')
    }

    return(     
        <section className="featured" style={{ 
            backgroundImage:`url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`
         }}>
            <div className="featured--vetical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.name}</div>
                    <div className="featured--info">
                        <div className="featured--point">{item.vote_average} pontos</div>
                        <div className="featured--year">{fisrtDate.getFullYear()}</div>
                        <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div className="featured--description">{description}</div>
                    <div className="featured--buttons">
                        <a href={`/watch/${item.id}`} className="featured--watchbutton">► Assistir</a>                        
                    </div>
                </div>  
            </div>         
        </section>        
    );
  }
  
  export default FeaturedMovie;