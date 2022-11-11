import React,{useState} from 'react';
import PropTypes from 'prop-types';
import './Login.css';


async function loginUser(credentials){
    return fetch('http://localhost:8080/login',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(credentials)
    }).then(data=>data.json())
}


const Login = ({setToken}) => {
    const [username,setUserName] =useState();
    const [password,setPassword] =useState();

    const handleSubmit=async e=>{
        e.preventDefault();
        const token=await loginUser({
            username,
            password
        });
        setToken(token);
    }
  return (
    <div className='login-wrapper'>
        <h1 className='text-heading'>Please Log In</h1>
    <form onSubmit={handleSubmit}>
        <label>
            <p>UserName</p>
            <input type='text' onChange={e=>setUserName(e.target.value)} required/>
        </label>
        <label>
            <p>Password</p>
            <input type='Password' onChange={e=>setPassword(e.target.value)} required/>
        </label>
        <div>
            <button type='submit' className='btn'>Login</button>
        </div>
    </form>
    </div>
  )
}
Login.propTypes={
    setToken:PropTypes.func.isRequired
}

export default Login;
