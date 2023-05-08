import React ,{ useContext } from "react";
import Navbar from '../components/Navbar'
import { MovieAdd } from "../components/CardUpcoming";
const Liked = () => {
  const movie = useContext(MovieAdd);
  console.log(movie)
  return (
    <div>
        <Navbar/>
        <h2>{movie}</h2>
    </div>
  )
}

export default Liked;
