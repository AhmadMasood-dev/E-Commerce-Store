import React from "react";

const NavBar = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="index.html" className="flex items-center">
            <img src="/logo.png" alt="Logo" className="w-64" />
          </a>

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

          {/* Navigation Links */}
          <div
            id="navbarSupportedContent"
            className="hidden lg:flex items-center space-x-6"
          >
            <ul className="flex items-center space-x-6">
              <li>
                <a
                  href="index.html"
                  className="text-black font-semibold uppercase hover:text-red-500 transition"
                >
                  Home
                </a>
              </li>
              <li className="relative group">
                <a
                  href="#"
                  className="text-black font-semibold uppercase hover:text-red-500 transition"
                >
                  Pages
                </a>
                <ul className="absolute hidden group-hover:flex flex-col bg-white shadow-md mt-2">
                  <li>
                    <a
                      href="about.html"
                      className="px-4 py-2 hover:bg-gray-100 transition"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="testimonial.html"
                      className="px-4 py-2 hover:bg-gray-100 transition"
                    >
                      Testimonial
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="product.html"
                  className="text-black font-semibold uppercase hover:text-red-500 transition"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="blog_list.html"
                  className="text-black font-semibold uppercase hover:text-red-500 transition"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="contact.html"
                  className="text-black font-semibold uppercase hover:text-red-500 transition"
                >
                  Contact
                </a>
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
};

export default NavBar;
