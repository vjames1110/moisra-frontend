import * as FaIcons from "react-icons/fa";

function WhyChoose() {

  const data = [
    {
      icon: "FaIndustry",
      title: "Industry Expertise",
      desc: "Deep domain knowledge across construction, IT, workforce, and finance sectors."
    },
    {
      icon: "FaProjectDiagram",
      title: "End-to-End Solutions",
      desc: "From strategy to execution, we handle the complete lifecycle of your project."
    },
    {
      icon: "FaUsers",
      title: "Trusted Network",
      desc: "Strong partnerships with professionals, vendors, and industry experts."
    },
    {
      icon: "FaBolt",
      title: "Fast Execution",
      desc: "Efficient workflows ensuring timely delivery without compromising quality."
    }
  ];

  const getIcon = (name) => {
    const Icon = FaIcons[name];
    return Icon ? <Icon /> : null;
  };

  return (
    <>
      <section id="about" className="why">
        <div className="container">
          <h2>Why Choose Moisra</h2>
          <p className="subtitle">
            We combine expertise, efficiency, and innovation to deliver impactful solutions.
          </p>

          <div className="grid">
            {data.map((item, index) => (
              <div key={index} className="card">
                <div className="icon">{getIcon(item.icon)}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .why {
          padding: 100px 60px;
          background: white;
          text-align: center;
        }

        .container {
          max-width: 1200px;
          margin: auto;
        }

        h2 {
          font-size: 36px;
          color: #0B1C3D;
          margin-bottom: 10px;
        }

        .subtitle {
          color: #666;
          max-width: 600px;
          margin: 0 auto 50px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }

        /* ✅ CARD DESIGN */
        .card {
          background: #F8FAFC;
          padding: 30px 25px;
          border-radius: 12px;
          transition: all 0.3s ease;
          text-align: center;
          border: 1px solid transparent;
        }

        .card:hover {
          transform: translateY(-8px);
          background: white;
          box-shadow: 0 15px 40px rgba(0,0,0,0.08);
          border-color: #eee;
        }

        /* ✅ ICON */
        .icon {
          font-size: 36px;
          color: #F59E0B;
          margin-bottom: 15px;
        }

        .card h3 {
          font-size: 18px;
          color: #0B1C3D;
          margin-bottom: 10px;
        }

        .card p {
          font-size: 14px;
          color: #555;
          line-height: 1.5;
        }

        /* ✅ TABLET */
        @media (max-width: 1000px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* ✅ MOBILE */
        @media (max-width: 600px) {
          .why {
            padding: 70px 20px;
          }

          h2 {
            font-size: 28px;
          }

          .grid {
            grid-template-columns: 1fr;
          }

          .card {
            padding: 25px 20px;
          }
        }
      `}</style>
    </>
  );
}

export default WhyChoose;