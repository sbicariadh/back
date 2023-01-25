import React,{useState} from 'react';
import './Auth.css';
import {postuser} from '../api/Userapi';
import { useNavigate } from 'react-router';
import axios from 'axios';
const Register = () => {

  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')

 let navigate = useNavigate()

   const handelsingup=async(values)=>{
    await postuser(values);
    console.log('value',values)
    navigate('/')
   }
   const handelLogin=async(values)=>{
    const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/user/login`,values)
    navigate('/cards')
   }


  return (
    

 
    <div className="mainn">
        <input type="checkbox" id="chk" aria-hidden="true"/>

            <div className="signup">
                <form>
                    <label for="chk" aria-hidden="true">Sign up</label>
                    <input type="text"  placeholder="User name"   values={name}  onChange={(e)=>setName(e.target.value)}  />
                    <input type="email"  placeholder="Email"  values={email}  onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="password"  placeholder="Password"   values={password}  onChange={(e)=>setPassword(e.target.value)}/>
                    <button type='button' onClick={()=>handelsingup({name,email,password})}>Sign up</button>
                </form>
            </div>

            <div className="login">
                <form>
                    <label for="chk" aria-hidden="true">Login</label>
                    <input type="text" placeholder='email' values={email}  onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="password"  placeholder="Password"  values={password}  onChange={(e)=>setPassword(e.target.value)} />
                    <button type='button' onClick={()=>handelLogin({email,password})}>Login</button>
                </form>
            </div>
    </div>
   
    
)
}

export default Register