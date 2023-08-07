import React from 'react';

import Homepage from './pages/Homepage'
import Services from './pages/Services';
import Aboutpage from './pages/Aboutpage';
import Contact from './pages/Contact';
import BarHome from './pages/BarHome';
import { Signup } from './components';
import { Thanks } from './container';
import { Routes, Route } from "react-router-dom";
import './App.css';


const App = () => (
  <div>
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/services' element={<Services />} />
      <Route path='/about' element={<Aboutpage />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/bar' element={<BarHome />} />
      <Route path='/thanks' element={<Thanks />} />
      <Route path='/userauth' element={<Signup />} />
    </Routes>
    {/* <Homepage /> */}
  </div>
);

export default App;