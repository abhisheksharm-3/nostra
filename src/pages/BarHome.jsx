import React from 'react'
import { HeaderImage, Navbar } from '../components'
import { Footer, Chef, Testimonials, Gallery, Reservation, HappyHours, SpecialMenu,  FindUs} from '../container'

const BarHome = () => {
  return (
    <div>
        <Navbar />
        <Reservation />
        <HappyHours />
        <SpecialMenu />
        <FindUs />
        <Footer />
    </div>
  )
}

export default BarHome