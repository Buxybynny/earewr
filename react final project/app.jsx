import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Games from "./components/Games";
import About from "./components/About";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Games />
      <Team />
      <Footer />
    </div>
  );
}

export default App;