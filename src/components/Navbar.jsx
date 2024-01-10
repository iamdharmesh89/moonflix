import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"
import {AiOutlineSearch} from 'react-icons/ai'
import styled from "styled-components";

const Navbar = () => {

  return (
        <Container>

      <div className="raw flex">
        <div className="logo">
          <NavLink to='/'>
            <img src={logo} alt="" />
          </NavLink>
        </div>
<div className="navlink">
    <div className="second">

    <div className="search">
        <input type="text"  placeholder="  search..." /><AiOutlineSearch/>
    </div>
    </div>
    <div className="third">

    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/tv">Tv</NavLink>
        </li>
        <li>
          <NavLink to="/movie">Movie</NavLink>
        </li>
        <li>
          <NavLink to="/liked">My List</NavLink>
        </li>
      </ul>
    </nav>
    </div>
</div>
    </div>
        </Container>
  );
};
const Container = styled.div`
.raw.flex{
    display:flex;
    align-items:center;
    padding: 0px 20px;
    .logo{
      a.active {
        color: red !important;
    }
    }
    img{
        width: 16%;
        height: 58%;
    }
    justify-container:space-between;
}
.navlink{
    display:flex;
    gap:0px;
    .search{
      display:flex;
      align-items:center;
      position:relative;
      svg{
        width:20px;
        color:red;
        height:20px;
      }
        input{
          position: absolute;
          width: 5px;
          right: 11.5%;
          height: 10px;
          color:white;
          background: #ff000000;
          /* color: transparent; */
          border: none;
            &:hover{
              width:100px;
              height:20px;
              color:white;
              cursor:pointer;
              transition:0.3 ease-out;
            }
        }
    }
    .third{
        nav ul{
            display:flex;
            gap:45px;
            white-space:nowrap;
            list-style:none;
            li a{
                text-decoration:none;
                color:white;
                font-size:18px;
                width:100%;
                &:hover{
                    color:red;
                    transition: 0.3s ease-in;
                }
            }
        }
    }
    align-items:center;
}
`
export default Navbar;
