import React from 'react'
import { Navbar, BarHeader } from '../components'

import { Footer, Chef, Testimonials, Gallery, Reservation, HappyHours, SpecialMenu,  FindUs, AboutBar, Poison } from '../container'

const BarHome = () => {
  return (
    <div>
        <Navbar />
        <BarHeader />
        <Reservation />
        <AboutBar />
        <Poison />
        <HappyHours />
        <SpecialMenu />
        <FindUs />
        <Footer />
    </div>
  )
}

export default BarHome