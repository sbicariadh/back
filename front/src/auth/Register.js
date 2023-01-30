import React,{useState} from 'react';
import './Auth.css';
import {postuser} from '../api/Userapi';
import { useNavigate } from 'react-router';
import axios from 'axios';
const Register = () => {

  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[role,setRole]=useState('')

 let navigate = useNavigate()

   const handelsingup=async(values)=>{
   
    values['role']='user'
    if(role==''){
        values['role']='user'
    }
    await postuser(values)
    
   
    navigate('/')
   }
   const handelLogin=async(values)=>{
    const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/user/login`,values)
    await localStorage.setItem('token',res.data.token)
    await localStorage.setItem('role',res.data.user.role)
    await localStorage.setItem('id',res.data.user.id)

    navigate('/')
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
                    <button type='button' onClick={()=>handelsingup({name,email,password,role})}>Sign up</button>
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