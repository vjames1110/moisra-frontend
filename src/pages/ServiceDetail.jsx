import { useParams, useLocation } from "react-router-dom";
import { useEffect } from "react";
import servicesData from "../data/servicesData";

function ServiceDetail() {
  const { id } = useParams();
  const location = useLocation();

  const service = servicesData.find((s) => s.id === id);

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  if (!service) {
    return (
      <div className="not-found">
        <h2>Service Not Found</h2>
      </div>
    );
  }

  return (
    <>
      <div className="service-page">

        {/* HERO */}
        <section className="hero">
          <div className="overlay">
            <h1>{service.title}</h1>
            <p>{service.description}</p>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="overview">
          <h2>Overview</h2>
          <p>
            MOISRA delivers professional consultancy services in{" "}
            <b>{service.title}</b>. We focus on execution excellence,
            compliance, and scalable solutions for industrial and construction needs.
          </p>
        </section>

        {/* CARDS */}
        <section className="grid">
          {service.sections.map((section) => (
            <div key={section.id} className="card">
              <h3>{section.title}</h3>
              <ul>
                {section.items.map((item, i) => (
                  <li key={i}>{item.name}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* DETAILS */}
        <section className="details">
          {service.sections.map((section) => (
            <div key={section.id} id={section.id} className="block">
              <h2>{section.title}</h2>

              <div className="tags">
                {section.items.map((item, i) => (
                  <span key={i}>{item.name}</span>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section className="cta">
          <h2>Need Expert Consultation?</h2>
          <p>Connect with MOISRA for customized business solutions.</p>
          <button>Get Quote</button>
        </section>

      </div>

      {/* INLINE STYLES */}
      <style jsx>{`
        .service-page {
          font-family: Arial, sans-serif;
        }

        /* HERO */
        .hero {
          height: 320px;
          background: linear-gradient(135deg, #0B1C3D, #1E3A8A);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-align: center;
          padding: 20px;
        }

        .hero h1 {
          font-size: 44px;
          margin-bottom: 10px;
        }

        .hero p {
          font-size: 18px;
          opacity: 0.9;
          max-width: 700px;
        }

        /* OVERVIEW */
        .overview {
          padding: 60px 20px;
          text-align: center;
          background: #F8FAFC;
        }

        .overview h2 {
          font-size: 32px;
          margin-bottom: 15px;
          color: #0B1C3D;
        }

        .overview p {
          max-width: 800px;
          margin: auto;
          color: #555;
          line-height: 1.6;
        }

        /* GRID */
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 25px;
          padding: 60px;
          background: white;
        }

        .card {
          background: #fff;
          padding: 25px;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.06);
          transition: 0.3s;
        }

        .card:hover {
          transform: translateY(-6px);
        }

        .card h3 {
          color: #0B1C3D;
          margin-bottom: 10px;
        }

        .card ul {
          padding-left: 18px;
        }

        .card li {
          margin-bottom: 6px;
          color: #555;
        }

        /* DETAILS */
        .details {
          padding: 60px;
          background: #F8FAFC;
        }

        .block {
          margin-bottom: 40px;
        }

        .block h2 {
          color: #1E3A8A;
          margin-bottom: 15px;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .tags span {
          background: white;
          padding: 8px 12px;
          border-radius: 20px;
          font-size: 13px;
          box-shadow: 0 3px 10px rgba(0,0,0,0.05);
        }

        /* CTA */
        .cta {
          padding: 60px;
          text-align: center;
          background: #0B1C3D;
          color: white;
        }

        .cta h2 {
          font-size: 28px;
        }

        .cta p {
          margin-top: 10px;
          opacity: 0.9;
        }

        .cta button {
          margin-top: 20px;
          padding: 12px 22px;
          border: none;
          background: #F59E0B;
          font-weight: bold;
          cursor: pointer;
          border-radius: 6px;
        }

        /* NOT FOUND */
        .not-found {
          padding: 120px;
          text-align: center;
        }

        /* RESPONSIVE */
        @media(max-width: 768px) {
          .hero h1 {
            font-size: 32px;
          }

          .grid {
            padding: 30px 20px;
          }

          .details {
            padding: 30px 20px;
          }
        }
      `}</style>
    </>
  );
}

export default ServiceDetail;