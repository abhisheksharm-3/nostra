import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
  MenuPage,
  Testimonials,
} from "../container";
import { Navbar } from "../components";
import NewsMessage from "../components/News/UserProfile";

const Homepage = () => {
  return (
    <div>
      <NewsMessage />
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
  );
};

export default Homepage;
