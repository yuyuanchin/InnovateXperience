import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx"
import About from "./components/About.jsx"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
    </>
  );
}

export default App;
