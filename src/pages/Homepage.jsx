import React from 'react'

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu, MenuPage, Testimonials } from '../container';
import { Navbar } from '../components';

const Homepage = () => {
  return (
    <div>
    <Navbar />
    <Header />
    <AboutUs />
    <MenuPage />
    <SpecialMenu />
    <Chef />
    <Testimonials />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
    </div>
  )
}

export default Homepage