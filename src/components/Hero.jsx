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
  height: 100vh; /* ✅ FIX: lock full screen */
  min-height: 600px; /* ✅ safety for very small screens */

  padding-top: 70px; /* header offset */

  background-image: 
    linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)),
    url("https://images.unsplash.com/photo-1503387762-592deb58ef4e");

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;
  color: white;

  padding-left: 20px;
  padding-right: 20px;
}

        .content {
          max-width: 900px;
        }

        h1 {
          font-size: 56px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        p {
          margin: 20px 0 30px;
          font-size: 20px;
          color: #ddd;
        }

        .buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* ✅ BUTTONS (Premium) */
        .primary {
          background: #F59E0B;
          border: none;
          padding: 14px 32px;
          cursor: pointer;
          font-weight: 600;
          border-radius: 6px;
          transition: all 0.3s ease;
        }

        .primary:hover {
          background: #d97706;
          transform: translateY(-2px);
        }

        .secondary {
          background: transparent;
          border: 2px solid white;
          padding: 14px 32px;
          color: white;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .secondary:hover {
          background: white;
          color: #0B1C3D;
          transform: translateY(-2px);
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
            font-size: 30px;
          }

          p {
            font-size: 16px;
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