import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/Navbar/index';
const App = () => {
  return (
    <Router>
       <Navbar/>
    </Router>
  )
}

export default App
