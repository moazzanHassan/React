
import About from "./components/About"
import Landingpage from "./components/Landingpage"
import Marquee from "./components/Marquee"
import Eyes from "./components/Eyes"
import { Navbar } from "./components/Navbar"
import Cards from "./components/Cards"
import SecondCard from "./components/SecondCard"
import Footer from "./components/Footer"
import Ready from "./components/Ready"
import LocomotiveScroll from 'locomotive-scroll';
function App() {

  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white">
      <Navbar />
      <Landingpage />
      <Marquee />
      <About />
      <Eyes />
      <Cards />
      <SecondCard />
      <Ready />
      <Footer />
    </div>
  )
}

export default App
