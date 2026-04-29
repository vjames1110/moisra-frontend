function Hero() {
  return (
    <>
      <section className="hero">
        <div className="content">
          <h1>MOISRA CONSULTANCY</h1>
          <p>Engineering Growth. Delivering Solutions.</p>

          <div className="buttons">
            <button className="primary">Get Quote</button>
            <button className="secondary">Our Services</button>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero {
          width: 100%;
          min-height: 100vh;
          background: linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)),
            url("https://images.unsplash.com/photo-1503387762-592deb58ef4e");
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          padding: 0 20px;
        }

        .content {
          max-width: 900px;
        }

        h1 {
          font-size: 48px;
        }

        p {
          margin: 20px 0;
          font-size: 18px;
        }

        .buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .primary {
          background: #F59E0B;
          border: none;
          padding: 14px 28px;
          cursor: pointer;
        }

        .secondary {
          background: transparent;
          border: 2px solid white;
          padding: 14px 28px;
          color: white;
        }

        /* tablet */

        @media (max-width: 900px) {
          h1 {
            font-size: 36px;
          }
        }

        /* mobile */

        @media (max-width: 600px) {
          h1 {
            font-size: 28px;
          }
        }
      `}</style>
    </>
  );
}

export default Hero;