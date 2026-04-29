function WhyChoose() {
  return (
    <>
      <section className="why">
        <h2>Why Choose Moisra</h2>

        <div className="grid">
          <div>Industry Expertise</div>
          <div>End to End Solutions</div>
          <div>Trusted Network</div>
          <div>Fast Execution</div>
        </div>
      </section>

      <style jsx>{`
        .why {
          padding: 100px 60px;
          background: white;
          text-align: center;
        }

        .grid {
          margin-top: 40px;
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 30px;
        }

        .grid div {
          padding: 30px;
          background: #F8FAFC;
          border-radius: 6px;
          font-weight: 600;
        }
      `}</style>
    </>
  );
}

export default WhyChoose;