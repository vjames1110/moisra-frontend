import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import servicesData from "../data/servicesData";


function ServiceDetail() {
  const { id } = useParams();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState(null);

  const service = servicesData.find((s) => s.id === id);

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        const yOffset = -80;
        const y =
          el.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [location]);

  // 🔥 Track active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      service?.sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [service]);

  if (!service) return <h2>Not Found</h2>;

  return (
    <>
      <div className="service-page">

        {/* HERO */}
        <section className="hero">
          <h1>{service.title}</h1>
          <p>{service.description}</p>
        </section>

        {/* OVERVIEW */}
        <section className="overview">
          <h2>Overview</h2>
          <p>
            MOISRA delivers high-quality <b>{service.title}</b> services with
            strong execution, compliance, and scalability.
          </p>
        </section>

        {/* MAIN LAYOUT */}
        <section className="main">

          {/* 🔥 SIDE NAV */}
          <div className="sidebar">
            {service.sections.map((section) => (
              <div
                key={section.id}
                className={`navItem ${
                  activeSection === section.id ? "active" : ""
                }`}
                onClick={() => {
                  const el = document.getElementById(section.id);
                  el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {section.title}
              </div>
            ))}
          </div>

          {/* CONTENT */}
          <div className="content">
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
          </div>

        </section>

        {/* CTA */}
        <section className="cta">
          <h2>Need Expert Consultation?</h2>
          <p>Let's build your business with MOISRA</p>
          <button onClick={() => alert("Enquiry Form Coming Soon")}>
            Get Quote
          </button>
        </section>

      </div>

      {/* STYLES */}
      <style jsx>{`

        .service-page {
          font-family: Arial, sans-serif;
        }

        /* HERO */
        .hero {
          height: 300px;
          background: linear-gradient(135deg, #0B1C3D, #1E3A8A);
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        .hero h1 {
          font-size: 42px;
        }

        .overview {
          padding: 60px 20px;
          text-align: center;
          background: #F8FAFC;
        }

        /* MAIN */
        .main {
          display: flex;
          gap: 40px;
          padding: 60px;
        }

        /* SIDEBAR */
        .sidebar {
          width: 250px;
          position: sticky;
          top: 100px;
          height: fit-content;
        }

        .navItem {
          padding: 10px;
          cursor: pointer;
          border-left: 3px solid transparent;
          color: #555;
          transition: 0.3s;
        }

        .navItem:hover {
          color: #0B1C3D;
        }

        .navItem.active {
          color: #0B1C3D;
          border-left: 3px solid #F59E0B;
          font-weight: bold;
        }

        /* CONTENT */
        .content {
          flex: 1;
        }

        .block {
          margin-bottom: 60px;
        }

        .block h2 {
          margin-bottom: 15px;
          color: #1E3A8A;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .tags span {
          background: white;
          padding: 10px 14px;
          border-radius: 20px;
          font-size: 13px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          transition: 0.3s;
        }

        .tags span:hover {
          transform: translateY(-3px);
        }

        /* CTA */
        .cta {
          padding: 80px;
          text-align: center;
          background: #0B1C3D;
          color: white;
        }

        .cta button {
          margin-top: 20px;
          padding: 12px 25px;
          background: #F59E0B;
          border: none;
          cursor: pointer;
          border-radius: 6px;
          font-weight: bold;
        }

        /* MOBILE */
        @media(max-width: 900px) {
          .main {
            flex-direction: column;
          }

          .sidebar {
            width: 100%;
            display: flex;
            overflow-x: auto;
          }

          .navItem {
            white-space: nowrap;
            border: none;
            border-bottom: 2px solid transparent;
          }

          .navItem.active {
            border-bottom: 2px solid #F59E0B;
          }
        }

      `}</style>
    </>
  );
}

export default ServiceDetail;