import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="about-page">

        {/* ✅ HERO SECTION */}
        <section className="about-hero">
          <h1>About MOISRA</h1>
          <p>
            Delivering smart consultancy solutions across construction, IT,
            workforce, and financial domains.
          </p>
        </section>

        {/* ✅ COMPANY OVERVIEW */}
        <section className="about-section">
          <div className="container">
            <h2>Who We Are</h2>
            <p>
              MOISRA Consultancy is a multi-domain consulting firm focused on
              helping businesses grow with strategic solutions. From engineering
              services to workforce management and financial consulting, we bring
              expertise that drives real results.
            </p>
          </div>
        </section>

        {/* ✅ MISSION & VISION */}
        <section className="about-section grid-2">
          <div>
            <h3>Our Mission</h3>
            <p>
              To empower businesses with innovative, efficient, and scalable
              solutions that accelerate growth and success.
            </p>
          </div>

          <div>
            <h3>Our Vision</h3>
            <p>
              To become a trusted consultancy partner across industries by
              delivering excellence and long-term value.
            </p>
          </div>
        </section>

        {/* ✅ WHY CHOOSE US */}
        <section className="about-section">
          <h2>Why Choose Us</h2>

          <div className="cards">
            <div className="card">
              <h4>Industry Expertise</h4>
              <p>Deep understanding of construction and IT domains.</p>
            </div>

            <div className="card">
              <h4>End-to-End Solutions</h4>
              <p>From planning to execution, we handle everything.</p>
            </div>

            <div className="card">
              <h4>Client-Centric Approach</h4>
              <p>We focus on delivering real business value.</p>
            </div>

            <div className="card">
              <h4>Reliable Support</h4>
              <p>Consistent guidance and long-term partnership.</p>
            </div>
          </div>
        </section>

        {/* ✅ STATS SECTION */}
        <section className="about-section stats">
          <div className="stat-box">
            <h2>100+</h2>
            <p>Projects Completed</p>
          </div>

          <div className="stat-box">
            <h2>50+</h2>
            <p>Clients Served</p>
          </div>

          <div className="stat-box">
            <h2>5+</h2>
            <p>Industries Covered</p>
          </div>
        </section>

        {/* ✅ CTA SECTION */}
        <section className="about-cta">
          <h2>Ready to Work With Us?</h2>
          <p>Let’s build something impactful together.</p>
          <Link to="/contact" className="cta-btn">Contact Us</Link>
        </section>

      </div>

      {/* ✅ STYLES */}
      <style jsx>{`
        .about-page {
          font-family: sans-serif;
        }

        .container {
          max-width: 1100px;
          margin: auto;
        }

        /* HERO */
        .about-hero {
          background: linear-gradient(135deg, #0B1C3D, #163E7A);
          color: white;
          text-align: center;
          padding: 100px 20px;
        }

        .about-hero h1 {
          font-size: 40px;
          margin-bottom: 15px;
        }

        .about-hero p {
          max-width: 600px;
          margin: auto;
          color: #ddd;
        }

        /* SECTIONS */
        .about-section {
          padding: 60px 20px;
          text-align: center;
        }

        .about-section h2 {
          margin-bottom: 20px;
        }

        .about-section p {
          max-width: 700px;
          margin: auto;
          color: #555;
        }

        /* GRID */
        .grid-2 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
          max-width: 1000px;
          margin: auto;
          text-align: left;
        }

        /* CARDS */
        .cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
          margin-top: 40px;
        }

        .card {
          background: white;
          padding: 25px;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          transition: 0.3s;
        }

        .card:hover {
          transform: translateY(-5px);
        }

        /* STATS */
        .stats {
          display: flex;
          justify-content: center;
          gap: 40px;
          background: #f8f9fc;
        }

        .stat-box h2 {
          color: #0B1C3D;
        }

        /* CTA */
        .about-cta {
          background: #0B1C3D;
          color: white;
          text-align: center;
          padding: 80px 20px;
        }

        .cta-btn {
          display: inline-block;
          margin-top: 20px;
          padding: 12px 25px;
          background: #fff;
          color: #0B1C3D;
          text-decoration: none;
          border-radius: 5px;
          font-weight: bold;
        }

        .cta-btn:hover {
          background: #ddd;
        }
      `}</style>
    </>
  );
}

export default About;