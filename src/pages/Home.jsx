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
      <section id="about" className="about">
        <div className="container">

          {/* TITLE */}
          <h2>About MOISRA</h2>

          {/* DESCRIPTION */}
          <p className="desc">
            MOISRA Consultancy is a multi-domain consulting firm helping businesses grow
            with strategic solutions across construction, IT, workforce, and finance.
          </p>

          {/* STATS CARDS */}
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

          {/* MISSION + VISION */}
          <div className="points">
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

        {/* WHY CHOOSE */}
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

      {/* ✅ STYLES */}
      <style jsx>{`
.about {
  padding: 100px 60px;
  background: #ffffff;
  text-align: center;
}

.container {
  max-width: 1100px;
  margin: auto;
}

/* TITLE */
.about h2 {
  font-size: 36px;
  color: #0B1C3D;
  margin-bottom: 20px;
}

/* DESCRIPTION */
.desc {
  color: #555;
  max-width: 700px;
  margin: 0 auto 50px;
  line-height: 1.6;
}

/* CARDS */
.visual {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 50px;
}

.card {
  background: #F8FAFC;
  padding: 30px;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
}

.card h3 {
  font-size: 28px;
  color: #F59E0B;
}

.card p {
  color: #555;
  font-size: 14px;
}

/* MISSION VISION */
.points {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  text-align: left;
  max-width: 800px;
  margin: auto;
}

.points h3 {
  color: #0B1C3D;
  margin-bottom: 8px;
}

.points p {
  color: #666;
  font-size: 14px;
}

/* TABLET */
@media (max-width: 900px) {
  .visual {
    grid-template-columns: 1fr 1fr;
  }
}

/* MOBILE */
@media (max-width: 600px) {
  .about {
    padding: 70px 20px;
  }

  .about h2 {
    font-size: 28px;
  }

  .visual {
    grid-template-columns: 1fr;
  }

  .points {
    grid-template-columns: 1fr;
    text-align: center;
  }
}
      `}</style>
    </>
  );
}

export default Home;