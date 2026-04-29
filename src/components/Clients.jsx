function Clients() {
  return (
    <>
      <section className="clients">
        <h2>Our Clients</h2>

        <div className="logos">
          <div>Client 1</div>
          <div>Client 2</div>
          <div>Client 3</div>
          <div>Client 4</div>
        </div>
      </section>

      <style jsx>{`
        .clients {
          padding: 100px 60px;
          background: #F8FAFC;
          text-align: center;
        }

        .logos {
          margin-top: 40px;
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 30px;
        }

        .logos div {
          background: white;
          padding: 40px;
          border-radius: 6px;
        }
      `}</style>
    </>
  );
}

export default Clients;