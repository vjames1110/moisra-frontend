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
        <p className="subtitle">Comprehensive Submission across industries</p>

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

  background:
    linear-gradient(
      180deg,
      #020617 0%,
      #111827 35%,
      #1E1B4B 100%
    );

  position: relative;
}

        .services h2 {
  text-align: center;

  margin-bottom: 16px;

  font-size: 42px;

  font-weight: 800;

  color: #FFFFFF;
  text-shadow: 0 2px 12px rgba(0,0,0,.25);

  letter-spacing: 1px;

  text-transform: uppercase;
}
  .services .subtitle {
  text-align: center;

  margin-bottom: 60px;

  font-size: 18px;
  font-weight: 400;


  color: rgba(255,255,255,.82);
  letter-spacing: .5px
}

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .card {
  background: rgba(255,255,255,.06);

  backdrop-filter: blur(16px);

  border: 1px solid rgba(255,255,255,.08);

  padding: 35px 25px;

  border-radius: 16px;

  box-shadow: 0 12px 32px rgba(0,0,0,.20);

  text-align: center;

  cursor: pointer;

  transition: all .35s ease;
}

        .card:hover {
  transform: translateY(-10px);

  border-color: rgba(251,191,36,.35);

  box-shadow: 0 20px 40px rgba(0,0,0,.28);
}

        .icon {
  font-size: 40px;

  margin-bottom: 18px;

  color: #FBBF24;

  display: flex;

  justify-content: center;
}

        .card h3 {
  margin-bottom: 12px;

  color: #FFFFFF;

  font-size: 22px;

  font-weight: 700;
}

        .card p {
  color: rgba(255,255,255,.72);

  font-size: 15px;

  line-height: 1.6;

  min-height: 48px;
}

        .link {
  display: inline-block;

  margin-top: 18px;

  font-size: 14px;

  color: #FBBF24;

  font-weight: 700;
}}

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