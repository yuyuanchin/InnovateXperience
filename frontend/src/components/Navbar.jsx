import logo from "../images/company-logo.png";
import NavbarMenuItems from "./Navbar/NavbarMenuItems.jsx";

const Navbar = () => {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-71px";
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <>
      <div id="navbar" className="drawer z-[1] fixed w-screen">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="w-full navbar bg-dark-blue text-white shadow-md shadow-dark-blue/50 lg:px-9">
            {/* Hamburger icon */}
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            {/* Logo */}
            <div className="navbar-start">
              <a href="/" className="text-xl font-bold">
                InnovateXperience
              </a>
            </div>
            {/* Menu items */}
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 flex lg:gap-5 xl:gap-10">
                <NavbarMenuItems />
              </ul>
            </div>
            {/* Login & Sign Up */}
            <div className="navbar-end hidden md:flex">
              <a className="btn btn-ghost hover:bg-transparent hover:text-light-blue">
                LOGIN
              </a>
              <a className="btn btn-outline btn-primary">SIGN UP</a>
            </div>
          </div>
        </div>
        {/* Drawer */}
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-dark-blue text-white">
            {/* Sidebar content */}
            <li>
              <img src={logo} alt="Company logo" className="w-[65px] pb-5" />
            </li>
            <NavbarMenuItems />
            <li>
              <a href="#" className="text-light-blue md:hidden">
                LOGIN
              </a>
            </li>
            <li>
              <a href="#" className="text-light-blue md:hidden">
                SIGN UP
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
