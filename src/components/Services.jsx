import { useNavigate } from "react-router-dom";
import servicesData from "../data/servicesData";
import Header from "./Header";

function Services() {
  const navigate = useNavigate();
  

  return (
    <>
      <section className="services">
        <h2>Our Services</h2>

        <div className="grid">
          {servicesData.map((item) => (
            <div key={item.id} className="card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>

              <button
                onClick={() => navigate(`/services/${item.id}`)}
              >
                Learn More
              </button>
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
          margin-bottom: 50px;
          font-size: 36px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .card {
          background: white;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 5px 20px rgba(0,0,0,.05);
          text-align: center;
        }

        .card button {
          margin-top: 15px;
          background: #0B1C3D;
          color: white;
          border: none;
          padding: 10px 18px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}

export default Services;