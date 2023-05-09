import React ,{ memo } from "react";
import Navbar from '../components/Navbar'
import {ImBin} from 'react-icons/im'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeElement } from "../redux/actions";
import styled from "styled-components";
const Liked = () => {
  const dispatch = useDispatch();
  const elements = useSelector((state) => state.elements);
  const img_url="https://image.tmdb.org/t/p/w500/"
  return (
    <Container>
        <Navbar/>
        <h3>{elements.length<1 && "No movie added"}</h3>
        <div className="container raw">        
        {Array.isArray(elements) && elements.map((element, index) => (
          <div className="card" key={index}>
            <img src={img_url + element.image.poster_path} alt="movie_image" />
            <div className="hover">
            <div className="remove">
              <p>{element.des.description}</p>
            <ImBin onClick={()=>dispatch(removeElement(element))}/>
            </div>
            </div>
            </div>           
        ))}
        </div>
        </Container>
  )
}

const Container = styled.div`
h3{
  margin-left:27px;
  font-size:40px;
  font-weight:500;
}
 .container.raw{
  margin-left:27px;
  display:flex;
  flex-wrap:wrap;
  .card{
    position:relative;
    width: 20%;
    height: 100%;
    img{
      width: 87%;
      height:20%;
      filter:brightness(0.8);
    }
    .hover{
      .remove {
        position: absolute;
        z-index: 2;
        top: 0%;
        /* background: red; */
        width: 86%;
        height: 90%;
        padding: 0;
        p {
          margin-top: 10px;
          padding: 5px 5px;
      }
        svg {
          width: 20%;
          height: 20%;
          display: flex;
          margin-left: 102px;
          &:hover{
            width:24%;
            height:24;
            color:red;
            cursor:pointer;
            transition: 0.4s ease-in;
          }
      }
      opacity:0;
      &:hover{
        opacity:1;
      }
    }
    }
  }
 }
`

export default memo(Liked);
