import { Toaster } from "react-hot-toast";
import HeroSection from "../components/HeroSection";
import Items from "../components/layout/Items";

function Home() {
  return (
    <>
      <HeroSection />
      <Items />
      <Toaster />
    </>
  );
}

export default Home;
