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
      <section className="why">
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
          background: linear-gradient(
      180deg,
      #1E1B4B 0%,
      #0F172A 45%,
      #020617 100%
    );
          text-align: center;
        }

        .why .container {
          max-width: 1200px;
          margin: auto;
        }

        .why .container h2 {
  font-size: 42px;

  font-weight: 800;

  color: #FFFFFF;

  margin-bottom: 12px;

  letter-spacing: 1px;

  text-transform: uppercase;

  text-shadow: 0 2px 12px rgba(0,0,0,.25);
}

        .why .subtitle {
  color: rgba(255,255,255,.78);

  max-width: 700px;

  margin: 0 auto 60px;

  font-size: 18px;

  line-height: 1.6;
}

        .why .grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }

        /* ✅ CARD DESIGN */
        .why .card {
  background: rgba(255,255,255,.06);

  backdrop-filter: blur(16px);

  border: 1px solid rgba(255,255,255,.08);

  padding: 32px 25px;

  border-radius: 16px;

  transition: all .35s ease;

  text-align: center;

  box-shadow: 0 12px 32px rgba(0,0,0,.18);
}

        .why .card:hover {
  transform: translateY(-10px);

  border-color: rgba(251,191,36,.35);

  box-shadow: 0 20px 42px rgba(0,0,0,.28);
}

        /* ✅ ICON */
        .why .icon {
  font-size: 40px;

  color: #FBBF24;

  margin-bottom: 18px;
}

        .why .card h3 {
  font-size: 22px;

  color: #FFFFFF;

  margin-bottom: 12px;

  font-weight: 700;
}

        .why .card p {
  font-size: 15px;

  color: rgba(255,255,255,.72);

  line-height: 1.6;
}

        /* ✅ TABLET */
        @media (max-width: 1000px) {
          .why .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* ✅ MOBILE */
        @media (max-width: 600px) {

  .why {
    padding: 70px 20px;
  }

  .why .container h2 {
    font-size: 28px;
  }

  .why .grid {
    grid-template-columns: 1fr;
  }

  .why .card {
    padding: 25px 20px;
  }

}
      `}</style>
    </>
  );
}

export default WhyChoose;