import { Link, animateScroll as scroll } from "react-scroll";

const NavbarMenuItems = () => {
  return (
    <>
      <Link to="home" smooth={true} duration={500}>
        <li>
          <a>HOME</a>
        </li>
      </Link>
      <Link to="services" smooth={true} duration={500}>
        <li>
          <a>SERVICES</a>
        </li>
      </Link>
      <Link to="about" smooth={true} duration={500}>
        <li>
          <a>ABOUT</a>
        </li>
      </Link>
      <Link to="why-us" smooth={true} duration={500}>
        <li>
          <a>WHY US</a>
        </li>
      </Link>
      <Link to="team" smooth={true} duration={500}>
        <li>
          <a>TEAM</a>
        </li>
      </Link>
    </>
  );
};

export default NavbarMenuItems;
