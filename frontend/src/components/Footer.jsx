import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../images/company-logo.png";

const Footer = () => {
  return (
    <>
      <footer className="footer px-7 lg:px-[80px] xl:px-[100px] pt-6 md:pt-[80px] pb-6 bg-dark-blue text-white">
        <aside className="items-center grid-flow-col lg:flex flex-row align-middle">
          <img src={logo} alt="Company logo" className="h-[30px]" />
          <div className="navbar-start">
            <a href="/" className="text-2xl min-[425px]:text-3xl font-bold">
              InnovateXperience
            </a>
          </div>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://www.linkedin.com"
              className="bg-white w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:shadow-md transition ease-in-out duration-300 hover:translate-y-1"
            >
              <i className="fa-brands fa-linkedin-in fa-xl text-dark-blue"></i>
            </a>
            <a
              href="https://www.twitter.com"
              className="bg-white w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:shadow-md transition ease-in-out duration-300 hover:translate-y-1"
            >
              <i className="fa-brands fa-x-twitter fa-xl text-dark-blue"></i>
            </a>
            <a
              href="https://www.facebook.com"
              className="bg-white w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:shadow-md transition ease-in-out duration-300 hover:translate-y-1"
            >
              <i className="fa-brands fa-facebook-f fa-xl text-dark-blue"></i>
            </a>
          </div>
        </nav>
      </footer>
      <footer className="footer px-7 lg:px-[80px] xl:px-[100px] pt-4 pb-6 md:pb-[80px] bg-dark-blue text-white lg:flex flex-row justify-between">
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </a>
          <a className="link link-hover">
            <Link to="services" smooth={true} duration={500}>
              Services
            </Link>
          </a>
          <a className="link link-hover">
            <Link to="about" smooth={true} duration={500}>
              About Us
            </Link>
          </a>
          <a className="link link-hover">
            <Link to="why-us" smooth={true} duration={500}>
              Why Us
            </Link>
          </a>
          <a className="link link-hover">
            <Link to="team" smooth={true} duration={500}>
              Our Team
            </Link>
          </a>
        </nav>
        <nav>
          <header className="footer-title text-md">Services</header>
          <a className="link link-hover">Digital Transformation Consulting</a>
          <a className="link link-hover">User Experience (UX) Design</a>
          <a className="link link-hover">
            Artificial Intelligence (AI) Integration
          </a>
        </nav>
        <nav>
          <header className="footer-title">Contact Us</header>
          <p className="flex gap-2">
            <span className="material-symbols-outlined">location_on</span>
            George Town, Malaysia
          </p>
          <p className="flex gap-2">
            <span className="material-symbols-outlined">call</span>+604-572 4953
          </p>
          <p className="flex gap-2">
            <span className="material-symbols-outlined">mail</span>
            enquiry@innovatex.com
          </p>
        </nav>
        <nav>
          <header className="footer-title">Subscribe</header>
          <input
            type="text"
            placeholder="Enter email"
            className="border-b bg-transparent w-[270px] pb-1 focus:outline-none"
          />
          <button className="btn btn-primary rounded-none w-[270px]">
            Subscribe
          </button>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
