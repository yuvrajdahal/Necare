import Hero from "./components/Hero";
import ServicesSection from "./components/Services";
import Footer from "../../layouts/Footer";
import Contact from "./components/Contact";
function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <Contact />
      <Footer />
    </>
  );
}
export default Home;
