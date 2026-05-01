function Clients() {
  return (
    <>
      <section className="clients">
        <h2>Our Clients</h2>
        <p className="subtitle">
          Trusted by businesses across multiple industries
        </p>

        <div className="logos">

          {/* ✅ Client Card */}
          <div className="client-card">
            <div className="logo-circle">JNL</div>
            <p>Jhajharia Nirman Limited</p>
          </div>

          <div className="client-card">
            <div className="logo-circle">RJ</div>
            <p>Rakesh Jain</p>
          </div>

          <div className="client-card">
            <div className="logo-circle">GIPL</div>
            <p>Gujarat Infracon Pvt Ltd</p>
          </div>

          <div className="client-card">
            <div className="logo-circle">AGIPL</div>
            <p>Agrawal Infra Pvt Ltd</p>
          </div>

        </div>
      </section>

      <style jsx>{`
        .clients {
          padding: 100px 20px;
          background: #F8FAFC;
          text-align: center;
        }

        .clients h2 {
          font-size: 32px;
          margin-bottom: 10px;
        }

        .subtitle {
          color: #666;
          margin-bottom: 50px;
        }

        /* ✅ GRID */
        .logos {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 40px;
          max-width: 1000px;
          margin: auto;
        }

        /* ✅ CARD */
        .client-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: 0.3s;
        }

        .client-card:hover {
          transform: translateY(-8px);
        }

        /* ✅ CIRCLE LOGO */
        .logo-circle {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: #0B1C3D;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
          margin-bottom: 15px;
          transition: 0.3s;
        }

        .client-card:hover .logo-circle {
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

        /* ✅ NAME */
        .client-card p {
          font-size: 14px;
          color: #333;
        }
      `}</style>
    </>
  );
}

export default Clients;