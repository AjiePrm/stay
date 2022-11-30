import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from "./pages/LandingPage";
import './assets/sass/style.scss';

function App() {
  return (
   <div className='App'>
      <Router>
        <Route exact path='/'><LandingPage/></Route>
      </Router>
    </div>
  )
  
}

export default App
