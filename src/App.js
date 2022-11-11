import React from 'react';
import './App.css';
import  Login  from './components/Login/Login';
import useToken from './components/Hooks/useToken';
import Routers from './Routers';

function App() {
  const {token , setToken} =useToken();

  if(!token){
    return <Login setToken={setToken}/>
  }

  return (
    <div className='wrapper'>
      <h1 className='application'>Application</h1>
      <Routers/>
    </div>
  );
}

export default App;
