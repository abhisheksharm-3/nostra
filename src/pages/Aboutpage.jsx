import React from 'react'

import { HeaderImage, Navbar } from '../components'
import { Footer, Chef, Testimonials, Gallery, Stats, InfoVideo } from '../container'

const Aboutpage = () => {
  return (
    <div>
        <Navbar />
        <HeaderImage title="Welcome to Nostra" path="Home > About Us" />
        <Stats />
        <InfoVideo />
        <Chef />
        <Testimonials />
        <Gallery />
        <Footer />

    </div>
  )
}

export default Aboutpage