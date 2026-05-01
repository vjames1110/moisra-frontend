function Footer() {

  // ✅ Simple smooth scroll
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <footer className="footer">
        <div className="footer-container">

          {/* ✅ Column 1: Company Info */}
          <div className="footer-column">
            <h3>MOISRA</h3>
            <p>
              Engineering Growth. Delivering Solutions across construction,
              IT, workforce, and financial domains.
            </p>
          </div>

          {/* ✅ Column 2: Quick Links */}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <a onClick={() =>scrollToSection("home")}>Home</a>
            <a onClick={() =>scrollToSection("about")}>About</a>
            <a onClick={() =>scrollToSection("clients")}>Our Clients</a>
            <a onClick={() =>scrollToSection("contact")}>Contact</a>
          </div>


          {/* ✅ Column 4: Contact Info */}
          <div className="footer-column">
            <h4>Contact</h4>
            <p>Email: moisra@gmail.com</p>
            <p>Phone: +91 81200 01481</p>
            <p>India</p>
          </div>

        </div>

        {/* ✅ Bottom Bar */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} MOISRA Consultancy. All rights reserved.</p>
        </div>
      </footer>

      <style jsx>{`
        .footer {
          background: #0B1C3D;
          color: white;
          padding: 60px 20px 20px;
        }

        .footer-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 30px;
          max-width: 1200px;
          margin: auto;
        }

        .footer-column h3,
        .footer-column h4 {
          margin-bottom: 15px;
        }

        .footer-column p,
        .footer-column a {
          font-size: 14px;
          margin-bottom: 10px;
          color: #ccc;
          display: block;
          text-decoration: none;
          transition: 0.3s;
        }

        .footer-column a:hover {
          color: #fff;
        }

        .footer-bottom {
          text-align: center;
          margin-top: 40px;
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 20px;
          font-size: 13px;
          color: #aaa;
        }
      `}</style>
    </>
  );
}

export default Footer;