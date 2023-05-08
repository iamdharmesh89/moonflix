import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import CardTopRated from '../components/CardTopRated'
import CardPopular from '../components/CardPopular'
import CardTrending from '../components/CardTrending'
import CardUpcoming from '../components/CardUpcoming'
import { useState } from 'react'
import "../css/custom.css"
const Movies =() => {  

  const [genre, setGenre] = useState([]);
  const [selected, setSelected]=useState("28");
  console.log(selected)
  const moviesData = async () => {
    let res = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=47cff2bc9ba543e2c1ea46e263f05d97`
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
      <CardTrending show={selected}/>
      <CardPopular show={selected}/>
      <CardTopRated show={selected}/>
      <CardUpcoming show={selected}/>
    </div>
  )
}

export default Movies
