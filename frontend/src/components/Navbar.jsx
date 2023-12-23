const Navbar = () => {
  return (
    <>
      <div className="navbar bg-dark-blue text-white lg:px-9">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
            >
              <li>
                <a href="/">HOME</a>
              </li>
              <li>
                <a href="#services">SERVICES</a>
              </li>
              <li>
                <a href="#about">ABOUT</a>
              </li>
              <li>
                <a href="#why-us">WHY US</a>
              </li>
              <li>
                <a href="#team">TEAM</a>
              </li>
            </ul>
          </div>
          <a href="/" className="text-xl font-bold">
            InnovateXperience
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-10">
            <li>
              <a href="#hero">HOME</a>
            </li>
            <li>
              <a href="#services">SERVICES</a>
            </li>
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#why-us">WHY US</a>
            </li>
            <li>
              <a href="#team">TEAM</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-ghost hover:bg-transparent hover:text-light-blue">
            LOGIN
          </a>
          <a className="btn btn-outline btn-primary">SIGN UP</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
