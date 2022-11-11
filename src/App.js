import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import  Dashboard  from './components/Dashboard/Dashboard';
import  Login  from './components/Login/Login';
import  Preferences  from './components/Preferences/Preferences';
import useToken from './components/Hooks/useToken';

function App() {
  const {token , setToken} =useToken();

  if(!token){
    return <Login setToken={setToken}/>
  }

  return (
    <div className='wrapper'>
      <h1 className='application'>Application</h1>
      <Router>
        <Routes>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/preferences' element={<Preferences/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
