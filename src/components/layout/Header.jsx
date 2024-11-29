import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4">
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
            <div className="block w-8 h-1 bg-black my-1 transition-all duration-300"></div>
            <div className="block w-8 h-1 bg-black my-1 transition-all duration-300"></div>
            <div className="block w-8 h-1 bg-black my-1 transition-all duration-300"></div>
          </button>

          {/* Navigation NavLinks */}
          <div
            id="navbarSupportedContent"
            className="hidden lg:flex items-center space-x-6"
          >
            <ul className="flex items-center space-x-6">
              <li>
                <NavLink
                  to="/"
                  className="text-black font-semibold uppercase hover:text-red-500 transition"
                >
                  Home
                </NavLink>
              </li>
              <li className="relative group">
                <NavLink
                  to="/productdetail"
                  className="text-black font-semibold uppercase hover:text-red-500 transition"
                >
                  Products
                </NavLink>
              </li>
              {/* <ul className="absolute hidden group-hover:flex flex-col bg-white shadow-md mt-2"> */}
              <li>
                <NavLink
                  to="cart"
                  className="text-black font-semibold uppercase hover:text-red-500 transition"
                >
                  Cart
                </NavLink>
              </li>

              {/* </ul> */}

              <li>
                <NavLink
                  to="/signin"
                  className="text-black font-semibold uppercase hover:text-red-500 transition"
                >
                  Login
                </NavLink>
              </li>
            </ul>
            <form className="ml-6">
              <button
                type="submit"
                className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition"
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
