import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="shadow">
      <div className="container px-4 mx-auto">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}

          <NavLink to="/" className="flex items-center">
            <img src="/logo.png" alt="Logo" className="w-64" />
          </NavLink>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden focus:outline-none"
            type="button"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="block w-8 h-1 my-1 transition-all duration-300 bg-black"></div>
            <div className="block w-8 h-1 my-1 transition-all duration-300 bg-black"></div>
            <div className="block w-8 h-1 my-1 transition-all duration-300 bg-black"></div>
          </button>

          {/* Navigation NavLinks */}
          <div
            id="navbarSupportedContent"
            className="items-center hidden space-x-6 lg:flex"
          >
            <ul className="flex items-center space-x-6">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `font-bold uppercase transition text-dark hover:text-primary ${
                      isActive ? "text-primary" : ""
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="relative group">
                <NavLink
                  to="/productdetail"
                  className={({ isActive }) =>
                    `font-bold uppercase transition text-dark hover:text-primary ${
                      isActive ? "text-primary" : ""
                    }`
                  }
                >
                  Products
                </NavLink>
              </li>
              {/* <ul className="absolute flex-col hidden mt-2 bg-white shadow-md group-hover:flex"> */}
              <li>
                <NavLink
                  to="cart"
                  className={({ isActive }) =>
                    `font-bold uppercase transition text-dark hover:text-primary ${
                      isActive ? "text-primary" : ""
                    }`
                  }
                >
                  Cart
                </NavLink>
              </li>

              {/* </ul> */}

              <li>
                <NavLink
                  to="/signin"
                  className={({ isActive }) =>
                    `font-bold uppercase transition text-dark hover:text-primary ${
                      isActive ? "text-primary" : ""
                    }`
                  }
                >
                  Login
                </NavLink>
              </li>
            </ul>
            <form className="ml-6">
              <button
                type="submit"
                className={({ isActive }) =>
                  `font-bold uppercase transition text-dark hover:text-primary ${
                    isActive ? "text-primary" : ""
                  }`
                }
              >
                🔍
              </button>
            </form>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
