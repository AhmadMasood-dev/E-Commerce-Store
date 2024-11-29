import { Outlet } from "react-router-dom";
import NavBar from "../../shared/NavBar";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <main>
        <Outlet />
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default AppLayout;
