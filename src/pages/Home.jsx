import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyChoose from "../components/WhyChoose";
import Internship from "../components/Internship";
import Testimonials from "../components/Testimonials";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Internship />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;