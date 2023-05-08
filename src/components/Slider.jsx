import React, { Fragment } from "react";
import homepage from "../assets/stranger-things.jpg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Slider = () => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <Container>
        <div className="container">
          <div className="homepage">
            <img src={homepage} alt="homepage" />
          </div>
          <div className="info">
            <h1>Unlimited movies, TV <br/>shows and more</h1>
            <h4>Watch anywhere. Cancel anytime.</h4>
            <h6>Ready to watch? Enter your email to create or restart your membership.</h6>
            <div className="button-group">
              <button onClick={()=>navigate("/signup")}>SignUp</button>
              <button onClick={()=>navigate("/login")}>LogIn</button>
            </div>
          </div>
        </div>
      </Container>
    </Fragment>
  );
};
const Container = styled.div`
  .homepage {
    position: relative;
    img {
      width: 100vw;
      height: 100vh;
      filter:brightness(0.5);
    }
  }
  .info {
    font-size:30px;
    top: 40%;
    position: absolute;
    left: 5%;
  }
  .button-group {
    display: flex;
    width:100%;
    height:100%;
    gap: 10px;
    button{
        background-color:red;
        color:white;
        width:20%;
        height:20%;
        border:none;
        padding: 10px 30px;
        border-radius:5px;
        &:hover{
            background-color:#b8b8b8;
            cursor:pointer;
            width:30%;
            height:30%;
            transition: 0.3s ease-in;
        }
    }
  }
`;
export default Slider;
