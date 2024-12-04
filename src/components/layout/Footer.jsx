function Footer() {
  return (
    <footer className="py-6 text-white ">
      <div className="container flex flex-col items-center justify-between px-4 mx-auto space-y-10 lg:flex-row lg:space-y-0">
        <div className="flex items-center space-x-2">
          <a href="#">
            <img src="/public/logo.png" alt="Logo" className="h-10 " />
          </a>
        </div>

        <nav className="flex flex-col space-y-10 text-center md:flex-row md:space-y-0 md:space-x-8">
          <a href="#About" className="text-dark hover:text-primary">
            ABOUT US
          </a>
          <a href="#Vision" className="text-dark hover:text-primary">
            VISION
          </a>
          <a href="#Events" className="text-dark hover:text-primary">
            EVENTS
          </a>
          <a href="#Team" className="text-dark hover:text-primary">
            TEAM
          </a>
          <a href="#Contact" className="text-dark hover:text-primary">
            CONTACT
          </a>
        </nav>
      </div>

      <hr className="my-4 border-dark" />

      <div className="container flex flex-col justify-between px-5 py-4 mx-auto sm:flex-row ">
        <div>
          <p className="mb-10 text-sm text-center text-dark sm:text-left">
            © 2024 TechOps —
          </p>
        </div>

        <div className="flex flex-col space-y-10 text-center md:flex-row md:space-y-0 ">
          <p className="mx-2 text-dark hover:text-primary">Privacy Policy</p>
          <p className="mx-2 text-dark hover:text-primary">Terms of Services</p>
          <p className="mx-2 text-dark hover:text-primary">Cookie Settings</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
