import { Link, animateScroll as scroll } from "react-scroll";

const NavbarMenuItems = () => {
  return (
    <>
      <li>
        <Link to="home" smooth={true} duration={500}>
          HOME
        </Link>
      </li>
      <li>
        <Link to="services" smooth={true} duration={500}>
          SERVICES
        </Link>
      </li>
      <li>
        <Link to="about" smooth={true} duration={500}>
          ABOUT
        </Link>
      </li>
      <li>
        <Link to="why-us" smooth={true} duration={500}>
          WHY US
        </Link>
      </li>
      <li>
        <Link to="team" smooth={true} duration={500}>
          TEAM
        </Link>
      </li>
    </>
  );
};

export default NavbarMenuItems;
