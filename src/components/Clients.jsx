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

  background:
    linear-gradient(
      180deg,
      #F8FAFC 0%,
      #EEF2FF 45%,
      #F1F5F9 100%
    );

  text-align: center;
}

        .clients h2 {
  font-size: 42px;

  font-weight: 800;

  margin-bottom: 12px;

  color: #0F172A;

  letter-spacing: 1px;

  text-transform: uppercase;
}

        .clients .subtitle {
  color: #475569;

  font-size: 17px;

  margin-bottom: 60px;
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
  background: rgba(255,255,255,.72);

  backdrop-filter: blur(14px);

  border: 1px solid rgba(255,255,255,.9);

  border-radius: 18px;

  padding: 30px 20px;

  display: flex;

  flex-direction: column;

  align-items: center;

  transition: all .35s ease;

  box-shadow: 0 10px 30px rgba(15,23,42,.06);
}

        .client-card:hover {
  transform: translateY(-10px);

  border-color: rgba(251,191,36,.35);

  box-shadow: 0 18px 40px rgba(15,23,42,.12);
}

        /* ✅ CIRCLE LOGO */
        .logo-circle {
  width: 100px;

  height: 100px;

  border-radius: 50%;

  background: linear-gradient(
    135deg,
    #020617,
    #1E1B4B,
    #0F766E
  );

  display: flex;

  align-items: center;

  justify-content: center;

  font-weight: 800;

  color: #FFFFFF;

  font-size: 18px;

  box-shadow: 0 8px 22px rgba(0,0,0,.12);

  margin-bottom: 18px;

  transition: all .35s ease;
}

        .client-card:hover .logo-circle {
  transform: scale(1.06);

  box-shadow: 0 14px 30px rgba(0,0,0,.18);
}

        /* ✅ NAME */
        .client-card p {
  font-size: 15px;

  font-weight: 500;

  color: #334155;

  line-height: 1.5;
}
      `}</style>
    </>
  );
}

export default Clients;