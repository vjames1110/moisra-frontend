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

      {/* ✅ ABOUT (UPGRADED) */}
      {/* ✅ ABOUT (UPGRADED) */}
      <section id="about" className="about">
  <div className="container">

    <h2>About MOISRA</h2>

    <p className="desc">
      MOISRA Consultancy is a multi-domain consulting firm helping businesses
      grow with strategic solutions across construction, IT, workforce,
      civil engineering, industrial supplies and financial services.
      We combine industry expertise, execution excellence and
      client-focused innovation to deliver measurable business impact.
    </p>

    <div className="visual">

      <div className="card">
        <h3>100+</h3>
        <p>Projects Delivered</p>
      </div>

      <div className="card">
        <h3>50+</h3>
        <p>Clients Served</p>
      </div>

      <div className="card">
        <h3>5+</h3>
        <p>Industries Covered</p>
      </div>

    </div>

  </div>
</section>

<WhyChoose />

      {/* ✅ CLIENTS */}
      <section id="clients">
        <Clients />
      </section>

      {/* ✅ CONTACT */}
      <section id="contact">
        <Contact />
      </section>

      <Footer />

      {/* ✅ STYLES */}
      <style jsx>{`
.about {
  padding: 100px 60px;

  background:
    linear-gradient(
      180deg,
      #F8FAFC 0%,
      #EEF2FF 45%,
      #F1F5F9 100%
    );

  text-align: center;

  position: relative;
}

.about .container {
  max-width: 1100px;
  margin: auto;
  position: relative;
  z-index: 2;
}

/* TITLE */
.about .container h2 {
  font-size: 42px;

  font-weight: 800;

  color: #0F172A;

  margin-bottom: 20px;

  letter-spacing: 1px;

  text-transform: uppercase;
}

/* DESCRIPTION */
.about .desc {
  color: #475569;

  font-size: 17px;

  max-width: 760px;

  margin: 0 auto 60px;

  line-height: 1.8;
}

/* CARDS */
.about .visual {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 50px;
}

.about .card {
  background: rgba(255,255,255,.72);

  backdrop-filter: blur(14px);

  border: 1px solid rgba(255,255,255,.9);

  padding: 34px;

  border-radius: 18px;

  transition: all .35s ease;

  box-shadow: 0 10px 30px rgba(15,23,42,.06);
}

.about .card:hover {
  transform: translateY(-10px);

  box-shadow: 0 18px 40px rgba(15,23,42,.12);

  border-color: rgba(251,191,36,.35);
}

.about .card h3 {
  font-size: 34px;

  font-weight: 800;

  color: #F59E0B;

  margin-bottom: 10px;
}

.about .card p {
  color: #475569;

  font-size: 15px;

  font-weight: 500;
}

/* MISSION VISION */
.about .points {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  text-align: left;
  max-width: 800px;
  margin: auto;
}

.about .points h3 {
  color: #0B1C3D;
  margin-bottom: 8px;
}

.about .points p {
  color: #666;
  font-size: 14px;
}

/* TABLET */
@media (max-width: 900px) {
  .about .visual {
    grid-template-columns: 1fr 1fr;
  }
}

/* MOBILE */
@media (max-width: 600px) {
  .about {
    padding: 70px 20px;
  }

  .about .container h2 {
    font-size: 28px;
  }

  .about .visual {
    grid-template-columns: 1fr;
  }

  .about .points {
    grid-template-columns: 1fr;
    text-align: center;
  }
}
      `}</style>
    </>
  );
}

export default Home;