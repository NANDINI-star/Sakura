import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import FAQ from "./Components/FAQ";
import HigherStudies from "./Components/HigherStudies";
import Programs from "./Components/Programs";
import Important from "./Components/Important";
import About from "./Components/About";
import Advertise from "./Components/Advertise";
import SocialMedia from "./Components/SocialMedia";

function App() {
  return (
    <div>
    <Advertise/>
    <Navbar/>
    <Hero/>
    <Important/>
    <About/>
    <HigherStudies/>
    <Programs/>
    <FAQ/>
    <SocialMedia/>
    </div>
   
  );
}

export default App;
