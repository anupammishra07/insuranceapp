import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { loginUser } from '../../redux/slices/userSlice';
import { RootState } from '../../redux/store';
import {store} from "../../redux/store"
type Props = {}
const Login = (props: Props) => {
  const dispatch = useDispatch<any>();
  const jwtToken = useSelector((state: RootState) => state.login.token);
  // const role = localStorage.getItem("role");
  const role = useSelector((state: RootState) => state.login.role);
  console.log(jwtToken);
  console.log(role);
  useEffect(()=>{
    loginFun()
console.log(jwtToken);
  console.log(role);

  },[dispatch , jwtToken , role])
 
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  
  const navigate = useNavigate();



   async function loginFun() {
    await dispatch(loginUser({email , password}));
    if(role === "admin"){
      navigate("/admin")
    }
    else if(role === "user"){
      navigate("/")
    }
    else if(role ==="insurer"){
      navigate("/insurer")
    }
  }
  function HandleLogin(){
    dispatch(loginUser({email , password}));
      if(role === "admin"){
        navigate("/admin")
      }
      else if(role === "user"){
        navigate("/")
      }
      else if(role ==="insurer"){
        navigate("/insurer")
      }
   
  }
 let count =0;
  
  return (
    <>
<div>

<div className="content">
  <div className="text">Login</div>
  <form action="#">
    {/* <div className="field">
      <span className="bx bxs-user" />
      <input type="username" placeholder="Username"/>
    </div> */}
    <div className="field">
      <span className="bx bxs-envelope" />
      <input type="text" placeholder="Email" value={email} onChange={(e:any)=>{setEmail(e.target.value)}}/>
    </div>
    <div className="field">
      <span className="bx bxs-lock-alt" />
      <input type="password" placeholder="Password" value={password} onChange={(e:any)=>{setPassword(e.target.value)}} />
    </div>
    <button onClick={(e:any)=>{
      e.preventDefault();
      loginFun()

      }}>Sign Up</button>
    {/* <h4>or Sign up with social platforms</h4> */}
    {/* <div className="social_icons">
      <i className="bx bxl-facebook" />
      <i className="bx bxl-discord-alt" />
      <i className="bx bxl-twitter" />
      <i className="bx bxl-dribbble" />
    </div> */}
    <div className="foot">
      <a>don't have an account?</a>
      <a href="/login" className="in">
        Sign In
      </a>
    </div>
  </form>
  {/* <div className="dark-light" >
    <i className="bx bx-moon moon" />
    <i className="bx bx-sun sun" />
  </div> */}
</div>


</div>

    </>
  )
}

export default Login