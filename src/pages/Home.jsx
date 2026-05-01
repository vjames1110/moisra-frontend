import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChoose from "../components/WhyChoose";
import Clients from "../components/Clients";
import Footer from "../components/Footer";
import Contact from "./Contact";

function Home() {
  return (
    <>
      <Header />

      {/* ✅ HERO */}
      <section id="home">
        <Hero />
      </section>

      {/* ✅ SERVICES */}
      <section id="services">
        <Services />
      </section>

      {/* ✅ WHY CHOOSE */}
      <section id="about">
        <div style={{ padding: "80px 20px", textAlign: "center" }}>
          <h2>About MOISRA</h2>
          <p style={{ maxWidth: "700px", margin: "20px auto", color: "#555" }}>
            MOISRA Consultancy is a multi-domain consulting firm helping businesses grow
            with strategic solutions across construction, IT, workforce, and finance.
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            marginTop: "40px"
          }}>
            <div>
              <h3>Our Mission</h3>
              <p>Deliver scalable and impactful business solutions.</p>
            </div>

            <div>
              <h3>Our Vision</h3>
              <p>Become a trusted consultancy partner across industries.</p>
            </div>
          </div>
        </div>
        <WhyChoose />
      </section>

      {/* ✅ CLIENTS */}
      <section id="clients">
        <Clients />
      </section>

      {/* ✅ CONTACT */}
      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
}

export default Home;