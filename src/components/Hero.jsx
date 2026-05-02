import { useEffect } from "react";

function Hero() {

  // ✅ Scroll to services section
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      const offset = 70;
      const top = element.offsetTop - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <section id="home" className="hero">
        <div className="content">
          <h1>MOISRA</h1>
          <p>Engineering Growth. Delivering Solutions.</p>

          <div className="buttons">
            <button
              className="primary"
              onClick={() => alert("Enquiry Form Coming Soon")}
            >
              Get Quote
            </button>

            <button className="secondary" onClick={scrollToServices}>
              Our Services
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
      .hero {
          width: 100%;
          height: 100vh;
          min-height: 600px;

          padding-top: 70px;

          background-image:
          linear-gradient(
        rgba(2,6,23,.78),
        rgba(30,27,75,.72)
          ),
          url("https://images.unsplash.com/photo-1503387762-592deb58ef4e");

          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;

          display: flex;
          align-items: center;
          justify-content: center;

          text-align: center;

          color: #FFFFFF;

          padding-left: 20px;
          padding-right: 20px;
        }

        .content {
          max-width: 900px;
        }

        h1 {
          font-size: 64px;

          font-weight: 800;

          letter-spacing: 2px;

          text-transform: uppercase;

          text-shadow: 0 4px 18px rgba(0,0,0,.30);
        }

        p {
          margin: 24px 0 36px;

          font-size: 22px;

          color: rgba(255,255,255,.88);

          font-weight: 400;

          letter-spacing: .5px;
        }

        .buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* ✅ BUTTONS (Premium) */
        .primary {
          background: linear-gradient(
          135deg,
          #FBBF24,
          #F59E0B
        );

          color: #FFFFFF;

          padding: 16px 36px;

          border: none;

          border-radius: 8px;

          font-size: 16px;

          font-weight: 700;

          box-shadow: 0 8px 24px rgba(0,0,0,.20);

          transition: all .3s ease;
        }

        .primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 28px rgba(0,0,0,.28);
        }

        .secondary {
          background: transparent;

          border: 2px solid rgba(255,255,255,.85);

          padding: 16px 36px;

          color: #FFFFFF;

          border-radius: 8px;

          font-size: 16px;

          font-weight: 600;

          transition: all .3s ease;
        }

        .secondary:hover {
          background: rgba(255,255,255,.12);
          transform: translateY(-3px);
        }

        /* ✅ TABLET */
        @media (max-width: 900px) {
          h1 {
            font-size: 42px;
          }

          p {
            font-size: 18px;
          }
        }

        /* ✅ MOBILE */
        @media (max-width: 600px) {
          .hero {
            height: auto;
            min-height: 90vh;
            padding-top: 90px;
          }

          h1 {
            font-size: 38px;
          }

          p {
            font-size: 18px;
          }

          .buttons {
            flex-direction: column;
            gap: 12px;
          }

          .primary,
          .secondary {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}

export default Hero;