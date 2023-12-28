import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Services from "../components/Services.jsx";
import About from "../components/About.jsx";
import Team from "../components/Team.jsx";
import Footer from "../components/Footer.jsx";
import VisionMission from "../components/VisionMission.jsx";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <VisionMission />
      <Team />
      <Footer />
    </>
  );
};

export default Home;
