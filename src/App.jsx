import React from 'react';

import Homepage from './pages/Homepage'
import Services from './pages/Services';
import { Routes, Route } from "react-router-dom";
import './App.css';

const App = () => (
  <div>
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/services' element={<Services />} />
    </Routes>
    {/* <Homepage /> */}
  </div>
);

export default App;