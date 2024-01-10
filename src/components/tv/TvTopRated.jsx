import React, { Fragment, createContext, useEffect, useState } from "react";
import styled from "styled-components";
import '../../css/custom.css'
import {
  AiOutlineLike,
  AiOutlinePlusCircle,
  AiOutlinePlayCircle,
} from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addElement } from "../../redux/actions";
import { BiDislike } from "react-icons/bi";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import useSmoothHorizontalScroll from "use-smooth-horizontal-scroll";
import { useNavigate } from "react-router-dom";

const MovieAdd=createContext();
const image_url = "https://image.tmdb.org/t/p/w500/";
const TvTopRated = (props) => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const moviesData = async () => {
    let res = await fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=47cff2bc9ba543e2c1ea46e263f05d97&with_genres=${props.show}`
    );
    let data = await res.json();
    return setData(data.results);
  };
  useEffect(() => {
    moviesData();
  }, [props]);
  const { scrollContainerRef, handleScroll, scrollTo, isAtStart, isAtEnd } = useSmoothHorizontalScroll();
  return (
    <Fragment>
      <Container>
        <h2>Top Rated</h2>
        <div className="row flex">
        <div className="container" ref={scrollContainerRef} onScroll={handleScroll} style={{ overflowX: "hidden", overflowY:"hidden"  }}>
          {data.map((movie) => (
            <div className="card">
              <img src={image_url + movie?.poster_path} alt="movie_image" />
              <div className="relative view">
                <div className="icons">
                  <AiOutlineLike />
                  <BiDislike />
                  <AiOutlinePlusCircle
                    onClick={() =>
                      dispatch(addElement({
                        title: { movie: movie.title },
                        image: { poster_path: movie.poster_path },
                        des: { description: movie.overview }
                      }))
                    }
                  />
                  <AiOutlinePlayCircle onClick={()=>navigate("/player", { state: { id: movie.id } })}/>
                </div>
                <h5>{movie?.overview}</h5>
              </div>
            </div>
          ))}
          </div>
          <div className="scroll">
          <button className="scroll-event" onClick={() => scrollTo(-310)} disabled={isAtStart}
            href="#title"
          >
            <AiOutlineDoubleLeft />
          </button>
          <button className="scroll-event" onClick={() => scrollTo(310)}
            href="#title"
          >
            <AiOutlineDoubleRight />
          </button>
        </div>
        </div>
      </Container>
    </Fragment>
  );
};

export default TvTopRated;

const Container = styled.div`
h2{
  margin-left:20px;
}
  .row.flex{
    margin-left:20px;
    gap:10px;
    .container{
      display: flex;
      gap: 10px;
    .card{
      width:50%;
      position:relative;
      height:50%;
      &:hover{
        width:60%;
        height:60%;
        transition:0.3s ease-in;
      }
      img{
        width: 38vh;
    height: 23vw;
        }
        }
      }
      }
      .relative.view{
        position:absolute;
        top: 30%;
        height: 69%;
        width: 100%;
        padding: 0px;
        opacity:0;
        &:hover{
          opacity:1;
          transition:0.5s ease-in;
        }
        .icons{
          display:flex;
            gap:10px;
            flex-direction:raw;
          svg {
            width: 34px;
            height: 33px;
            &:hover{
              cursor:pointer;
              width:50px;
              height:50px;
              color:red;
              transition: 0.3s ease-out;
            }
        }
        }
      }
    }

  }
`;