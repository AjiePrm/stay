import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from "./pages/LandingPage";
import './assets/sass/style.scss';
import Example from 'pages/Example';

function App() {
  return (
   <div className='App'>
      <Router>
        <Route exact path='/'><LandingPage/></Route>
        <Route exact path='/example' component={Example}/>
      </Router>
    </div>
  )
  
}

export default App
