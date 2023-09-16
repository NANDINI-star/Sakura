import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import FAQ from "./Components/FAQ";
import HigherStudies from "./Components/HigherStudies";
import Programs from "./Components/Programs";
import Important from "./Components/Important";
import About from "./Components/About";

function App() {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Important/>
    <About/>
    <HigherStudies/>
    <Programs/>
    <FAQ/>
    </div>
   
  );
}

export default App;
