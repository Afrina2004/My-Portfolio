import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isHome = location.pathname === '/';

  const navLinks = (
    <>
      <li>
        <Link to={isHome ? '#introduction' : '/#introduction'} className="text-white">Introduction</Link>
      </li>
      <li>
        <Link to={isHome ? '#about' : '/#about'} className="text-white">About</Link>
      </li>
      <li>
        <Link to={isHome ? '#skills' : '/#skills'} className="text-white">Skills</Link>
      </li>
      <li>
        <Link to={isHome ? '#projects' : '/#projects'} className="text-white">Projects</Link>
      </li>
      <li>
        <Link to={isHome ? '#contact' : '/#contact'} className="text-white">Contact</Link>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar fixed top-0 left-0 w-full z-50 bg-black border-b px-2">
        {/* Mobile Dropdown */}
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52">
            {navLinks}
          </ul>
        </div>

        {/* Brand / Name */}
        <div className="flex-1">
          <Link to="/" className="text-xl text-white font-bold"> Mossammat Afrina Khanam</Link>
        </div>

        {/* Desktop Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-2">
            {navLinks}
          </ul>
        </div>
      </div>

      {/* Spacer below navbar to prevent overlap */}
      <div className="h-16" />
    </>
  );
};

export default Navbar;
