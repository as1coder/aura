import HeroSection from "./component/heroSection";
import Navbar from "./component/Navbar";
import Collection from "./component/Collection";
import ScrollTopButton from "./component/scrollUp";
import WhatsAppButton from "./component/wbutton";
import About from "./component/about";
import AboutPerfume from "./component/aboutPerfume";
import PerfumeInfo from "./component/perfumeInfo";
import Location from "./component/location";
import Footer from "./component/footer";

export default function Home() {
  return (
    <main>
      <Navbar />

      <HeroSection />

      <Collection />  

      <AboutPerfume />

      <PerfumeInfo />

      <About />

      <Location />

      <ScrollTopButton />

      <WhatsAppButton />

      <Footer />
    </main>
  );
}