import React from 'react'

import { HeaderImage, Navbar } from '../components'
import { Footer, Chef, Testimonials, Gallery, Map, ReachFile } from '../container'

const Contact = () => {
  return (
    <>
    <Navbar />
    <HeaderImage title="Contact Us" path="Home > Contact Us" />
    <Map />
    <ReachFile />
    <Footer />
    </>
  )
}

export default Contact