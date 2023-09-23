import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Loader from './components/Loader/Loader'

const Homepage = lazy(() => import('./pages/Homepage'));
const Services = lazy(() => import('./pages/Services'));
const Aboutpage = lazy(() => import('./pages/Aboutpage'));
const Contact = lazy(() => import('./pages/Contact'));
const BarHome = lazy(() => import('./pages/BarHome'));
const Page404 = lazy(() => import('./pages/Page404'));
const Signup = lazy(() => import('./components/Signup'));
const Thanks = lazy(() => import('./container/ThankYouPage/Thanks'));

const App = () => (
  <div>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about' element={<Aboutpage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/bar' element={<BarHome />} />
        <Route path='/thanks' element={<Thanks />} />
        <Route path='/userauth' element={<Signup />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </Suspense>
  </div>
);

export default App;
