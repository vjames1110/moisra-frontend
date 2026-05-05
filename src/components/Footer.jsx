function Footer() {

  // ✅ Smooth scroll with header offset
  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      const offset = 70;
      const top = element.offsetTop - offset;

      window.scrollTo({
        top,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <footer className="footer">

        {/* TOP */}
        <div className="footer-container">

          {/* COMPANY */}
          <div className="footer-column brand">
            <h3>MOISRA</h3>

            <p>
              Engineering growth through innovative consultancy,
              workforce solutions, technology, construction,
              finance and industrial expertise.
            </p>
          </div>


          {/* LINKS */}
          <div className="footer-column">
            <h4>Quick Links</h4>

            <a onClick={() => scrollToSection("home")}>
              Home
            </a>

            <a onClick={() => scrollToSection("about")}>
              About
            </a>

            <a onClick={() => scrollToSection("clients")}>
              Our Clients
            </a>

            <a onClick={() => scrollToSection("contact")}>
              Contact
            </a>
          </div>


          {/* CONTACT */}
          <div className="footer-column">
            <h4>Contact</h4>

            <p>moisra@gmail.com</p>

            <p>+91 88890 93777</p>

            <p>India</p>
          </div>

        </div>


        {/* BOTTOM */}
        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} MOISRA Consultancy.
            All rights reserved.
          </p>

        </div>

      </footer>


      <style jsx>{`

        .footer{

  background:
    linear-gradient(
      180deg,
      #0F172A 0%,
      #111827 35%,
      #1E1B4B 100%
    );

  color:white;

  padding:70px 20px 20px;

  margin-top:0;

  position:relative;

  overflow:hidden;
}


/* GRID */
.footer-container{

  max-width:1300px;

  margin:auto;

  display:grid;

  grid-template-columns:1.4fr 1fr 1fr;

  gap:40px;

  padding-bottom:40px;
}


/* PREMIUM COLUMN */
.footer-column{

  background:rgba(255,255,255,.04);

  backdrop-filter:blur(14px);

  border:1px solid rgba(255,255,255,.06);

  border-radius:20px;

  padding:30px;

  transition:.35s ease;
}

.footer-column:hover{

  transform:translateY(-6px);

  border-color:rgba(245,158,11,.25);

  box-shadow:0 18px 40px rgba(0,0,0,.22);
}


/* BRAND */
.footer-column h3{

  font-size:30px;

  font-weight:800;

  margin-bottom:18px;

  color:white;

  letter-spacing:1px;

  text-shadow:0 2px 10px rgba(0,0,0,.25);
}


/* HEADINGS */
.footer-column h4{

  font-size:20px;

  font-weight:700;

  margin-bottom:22px;

  color:white;

  position:relative;
}

.footer-column h4::after{

  content:"";

  position:absolute;

  left:0;

  bottom:-10px;

  width:40px;

  height:3px;

  border-radius:20px;

  background:
    linear-gradient(
      90deg,
      #F59E0B,
      #FBBF24
    );
}


/* TEXT */
.footer-column p{

  color:rgba(255,255,255,.72);

  font-size:15px;

  line-height:1.8;

  margin-bottom:10px;
}


/* LINKS */
.footer-column a{

  display:block;

  width:fit-content;

  color:rgba(255,255,255,.72);

  text-decoration:none;

  margin-bottom:14px;

  cursor:pointer;

  transition:.3s ease;
}

.footer-column a:hover{

  color:#FBBF24;

  transform:translateX(8px);
}


/* BRAND */
.brand p{
  max-width:360px;
}


/* BOTTOM */
.footer-bottom{

  border-top:1px solid rgba(255,255,255,.08);

  padding-top:20px;

  text-align:center;
}

.footer-bottom p{

  color:rgba(255,255,255,.55);

  font-size:14px;

  margin:0;
}


/* TABLET */
@media(max-width:992px){

  .footer-container{

    grid-template-columns:1fr 1fr;

    gap:30px;
  }

  .brand{
    grid-column:span 2;
  }

}


/* MOBILE */
@media(max-width:768px){

  .footer{

    padding:50px 20px 20px;
  }

  .footer-container{

    grid-template-columns:1fr;

    gap:24px;

    text-align:center;
  }

  .brand{
    grid-column:span 1;
  }

  .brand p{
    max-width:100%;
  }

  .footer-column{

    padding:24px;
  }

  .footer-column h4::after{

    left:50%;

    transform:translateX(-50%);
  }

  .footer-column a{

    margin-left:auto;

    margin-right:auto;
  }

  .footer-column a:hover{

    transform:none;
  }

  .footer-column h3{

    font-size:24px;
  }

}

      `}</style>
    </>
  );
}

export default Footer;