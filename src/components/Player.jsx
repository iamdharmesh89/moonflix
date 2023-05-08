import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Player = () => {
    const {state} = useLocation();
    const [data, setData]=useState([]);
    const video_url= `https://www.youtube.com/embed/`

    const moviesPlayer=async ()=>{
        try{
        const response = await fetch(`https://api.themoviedb.org/3/movie/${state.id}/videos?api_key=47cff2bc9ba543e2c1ea46e263f05d97`)
        const data1= await response.json();
        return setData(data1.results);
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{moviesPlayer(state.id)},[state.id])
  return (
    <Container>
      <Navbar />
      {state.name  && <h2>Available video for <span>{state.name}</span></h2>}
      {!state.name && <h2>Sorry Video are not available</h2>}
      <div className="video">
        {console.log(data)}
        
      {Array.isArray(data) && data.map((item)=>(
        <iframe width="420" height="315"
        src={video_url+ item?.key}>
        </iframe>
      ))}
      </div>
    </Container>
  );
};

export default Player;
const Container = styled.div`
h2{
    margin-left:10%;
    font-weight:400;
    span{
      color:red;
    }
}
    .video{
        display:flex;
        gap:10px;
        flex-wrap:wrap;
        margin-left:10%;
        iframe{
            filter:brightness(0.5);
            border-radius:5px;
            &:hover{
                filter:brightness(1);
                cursor:pointer;
            }
        }
    }
`;
