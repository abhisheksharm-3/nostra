import React from 'react'
import { Navbar, BarHeader } from '../components'

import { Footer, HappyHours, SpecialMenu,  FindUs, AboutBar, Poison } from '../container'

const BarHome = () => {
  return (
    <div>
        <Navbar />
        <BarHeader />
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