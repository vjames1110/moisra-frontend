import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChoose from "../components/WhyChoose";
import Clients from "../components/Clients";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <WhyChoose />
      <Clients />
      <Footer />
    </>
  );
}

export default Home;