import Navbar from "./Navbar";
import Hero from "./HeroSection";
import Footer from './Footer'
import CraftsSection from './CraftsSection'

export default function Home() {
  return (
    <>
    {/* Navbar  */}
      <Navbar />
      {/* main */}
      <Hero />
      <CraftsSection/>
      {/* footer */}
    <Footer />
    </>
  );
}