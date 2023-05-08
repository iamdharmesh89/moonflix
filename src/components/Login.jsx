import React, { useState } from 'react'
import styled from 'styled-components'
import image from '../assets/stranger-things.jpg'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate=useNavigate();
  return (
    <Container>
        <div className="row flex">
            <div className="img">
                <img src={image} alt="" />
            </div>
            <div className="form card">
                <h1>Login</h1>
                <form action="">
                    <input type="text" placeholder='email'/>
                    <input type="password"  placeholder='password'/>
                    <div className="button-group">
                    <button onClick={()=>navigate("/") }>Login</button>
                    <p>Don't have Acount <span onClick={()=>navigate("/signup")}>SignUp</span></p>
                    </div>
                </form>           
            </div>
        </div>
    </Container>
  )
}
const Container = styled.div`
    .row.flex{
        position:relative;
        .img{
            img{
                width:100vw;
                height:100vh;
                filter:brightness(0.5)
            }
        }
        .form.card{
            h1{
                text-align:center;
            }
            width:20%;
            position:absolute;
            top:30%;
            background-color:#8080807a;
            left:40%;
            form{
                padding:20px 20px;
                display:flex;
                gap:10px;
            flex-direction:column;
                input{
                    padding:10px 10px;
                    border:none;
                }
                button{
                    gap:10px;
                    background-color:red;
                    color:white;
                    padding:10px 30px;
                    border-radius:4px;
                    border:none;
                    &:hover{
                        background-color:yellow;
                        color:black;
                        cursor:pointer;
                    }
                    }
                    p{
                        span{
                            color:red;
                            font-size:18px;
                            &:hover{
                                color:yellow;
                                cursor:pointer;
                            }
                        }
                }
            }
        }
    }
`
export default Login
