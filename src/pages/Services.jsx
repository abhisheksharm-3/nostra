import React from 'react'
import { HeaderImage, Navbar, } from '../components'
import { ServiceQuality, Reservation, HappyHours, MenuPage, Footer } from '../container'

const Services = () => {
  return (
    <div>
        <Navbar />
        <HeaderImage title="What We Offer" path="Home > Our Services"/>
        <ServiceQuality />
        <MenuPage />
        <Reservation />
        <HappyHours />
        <Footer />
    </div>
  )
}

export default Services