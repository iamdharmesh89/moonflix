import React from 'react'
import Navbar from './Navbar'
import TvPopular from './tv/TvPopular'
import TvTopRated from './tv/TvTopRated'
import "../css/custom.css"
import { useState, useEffect } from 'react'

const TvSection = () => {
  const [genre, setGenre] = useState([]);
  const [selected, setSelected]=useState("10763");
  console.log(selected)
  const moviesData = async () => {
    let res = await fetch(
      `https://api.themoviedb.org/3/genre/tv/list?api_key=47cff2bc9ba543e2c1ea46e263f05d97`
    );
    let data = await res.json();
    return setGenre(data.genres);
  };
  useEffect(() => {
    moviesData();
  }, []);

  return (
    <div>
      <Navbar/>
      <select onChange={(e)=>setSelected(e.target.value)}>
        {genre.map((genre,id)=>(
            <option key={id} value={genre.id} >{genre.name}</option>
        ))}
      </select>
      <TvPopular show={selected}/>
      <TvTopRated show={selected}/>
    </div>
  )
}

export default TvSection
