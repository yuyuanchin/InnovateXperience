import { Link, animateScroll as scroll } from "react-scroll";

const FooterCompany = () => {
  return (
    <>
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
    </>
  );
};

export default FooterCompany;
