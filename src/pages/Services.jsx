import { HeaderImage, Navbar, } from '../components'
import { ServiceQuality, HappyHours, MenuPage, Footer } from '../container'

const Services = () => {
  return (
    <div>
        <Navbar />
        <HeaderImage title="What We Offer" path="Home > Our Services"/>
        <ServiceQuality />
        <MenuPage />
        <HappyHours />
        <Footer />
    </div>
  )
}

export default Services