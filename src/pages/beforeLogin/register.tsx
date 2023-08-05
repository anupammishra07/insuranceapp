import React ,{ useEffect, useState } from 'react'
import "../../assests/css/loginForm.css"
import { useSelector, useDispatch } from 'react-redux';
import {Routes, Route, useNavigate} from 'react-router-dom';
import {   registerUser } from '../../redux/slices/userSlice';
import { RootState } from '../../redux/store';
type Props = {}
const Register = (props: Props) => {
  const dispatch = useDispatch<any>();
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate = useNavigate();
  const jwtTokeen = useSelector((state: RootState) => state.login.token);
  const error=useSelector((state: RootState) => state.login.isError);
  
  return (
    <>
    <div className="content">
  <div className="text">Sign Up</div>
  
  {/* {isError == true?<p>some error occured</p>:""} */}
  <form action="#">
    {error}
    {/* <div className="field">
      <span className="bx bxs-user" />
      <input type="username" placeholder="Username"/>
    </div> */}
    <div className="field">
      <span className="bx bxs-envelope" />
      <input type="email" placeholder="Email" value={email} onChange={(e:any)=>{setEmail(e.target.value)}}/>
    </div>
    <div className="field">
      <span className="bx bxs-lock-alt" />
      <input type="password" placeholder="Password" value={password} onChange={(e:any)=>{setPassword(e.target.value)}} />
    </div>
    <button onClick={()=>{dispatch(registerUser({email , password}));
    localStorage.setItem('token', jwtTokeen);
    // if(isRegisterSuccuss){
    //   navigate('/login')
    // }
    
    if(!error){
    navigate('/login')
      
    }
    
  }}>Sign Up</button>
    <h4>or Sign up with social platforms</h4>
    <div className="social_icons">
      <i className="bx bxl-facebook" />
      <i className="bx bxl-discord-alt" />
      <i className="bx bxl-twitter" />
      <i className="bx bxl-dribbble" />
    </div>
    <div className="foot">
      <a>Already have an account?</a>
      <a href="/login" className="in">
        Sign In
      </a>
      {/* {isError}{isLoginSuccuss}{isRegisterSuccuss} */}
    </div>
  </form>
  {/* <div className="dark-light" >
    <i className="bx bx-moon moon" />
    <i className="bx bx-sun sun" />
  </div> */}
</div>
</>
  )
}

export default Register