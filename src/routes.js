import React from 'react';
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import App from './App';
import Home from './Home';
import Hero from './Sidebar';

function Rout() {
  return(
    <BrowserRouter>
      <Routes>
      <Route path='/' element={App}/>
      <Route path='/Home' element={Hero}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Rout;
