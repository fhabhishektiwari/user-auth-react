import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Preferences from './components/Preferences/Preferences'

export default function Routers(){
  return (
    <Router>
        <Routes>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/preferences' element={<Preferences/>}/>
        </Routes>
    </Router>
  )
}
