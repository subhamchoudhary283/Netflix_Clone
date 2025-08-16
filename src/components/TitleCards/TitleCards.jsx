import './TitleCards.css';
import cards_data from '../../assets/cards/Cards_data';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';


const TitleCards = ({titles,category}) => {

  const [apiData,setApiData] = useState([]);

  const cardsRef = useRef();
  //////////////////////////////////////////////////////////////////////

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzM2U5YzQxMjI0ZWQ0YTc5OTUwMWU3YmZlOWRhM2E2YiIsIm5iZiI6MTc1NTMxNjIzMi41NjQsInN1YiI6IjY4YTAwMDA4YTMyYzE5Njg1NzhmZWZhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t3YwJFFSqcPpmkYqmIkhYFX1IobdE5zznWfuHMhIM1w'
  }
};



  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const handleWheel=(event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category?category:'now_playing'}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));
/////////////////////////////////////
    cardsRef.current.addEventListener('wheel',handleWheel)
  },[])

  return (
    <div className="title-cards">
      <h2>{titles?titles: 'Now Playing'}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link className="card" key={index} to={`/player/${card.id}`}>
              <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt='' />
              <p>{card.original_title}</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TitleCards;
