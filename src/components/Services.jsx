import { useNavigate } from "react-router-dom";
import servicesData from "../data/servicesData";
import * as FaIcons from "react-icons/fa";

function getIcon(iconName) {
  const IconComponent = FaIcons[iconName];

  if (!IconComponent) return "⚙️"; // fallback

  return <IconComponent />;
}

function Services() {
  const navigate = useNavigate();

  // SORT SERVICES
  const sortedServices = [...servicesData].sort(
    (a, b) => a.order - b.order
  );

  return (
    <>
      <section className="services">
        <h2>Our Services</h2>
        <p>Comprehensive Submission across industries</p>

        <div className="grid">
          {sortedServices.map((item) => (
            <div
              key={item.id}
              className="card"
              onClick={() => navigate(`/services/${item.id}`)}
            >
              {/* ICON */}
              <div className="icon">{getIcon(item.icon)}</div>

              <h3>{item.title}</h3>
              <p>{item.shortDescription}</p>

              <span className="link">Explore →</span>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .services {
          padding: 120px 60px;
          background: #F8FAFC;
        }

        h2 {
          text-align: center;
          margin-bottom: 60px;
          font-size: 38px;
          color: #0B1C3D;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .card {
          background: white;
          padding: 35px 25px;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,.06);
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,.1);
        }

        .icon {
          font-size: 36px;
          margin-bottom: 15px;
          color: #F59E0B;
          display: flex;
          justify-content: center;
}

        .card h3 {
          margin-bottom: 10px;
          color: #0B1C3D;
        }

        .card p {
          color: #555;
          font-size: 14px;
          min-height: 40px;
        }

        .link {
          display: inline-block;
          margin-top: 15px;
          font-size: 14px;
          color: #F59E0B;
          font-weight: 500;
        }

        .card:hover .link {
          text-decoration: underline;
        }

        @media(max-width: 900px) {
          .services {
            padding: 80px 20px;
          }
        }
      `}</style>
    </>
  );
}



export default Services;