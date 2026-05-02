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
          background:#07152F;
          color:white;
          padding:50px 20px 15px;
          margin-top:0;
        }


        /* GRID */
        .footer-container{
          max-width:1300px;
          margin:auto;

          display:grid;
          grid-template-columns: 1.4fr 1fr 1fr;
          gap:50px;

          padding-bottom:30px;
        }


        /* HEADINGS */
        .footer-column h3{
          font-size:28px;
          margin-bottom:14px;
          color:white;
          letter-spacing:1px;
        }

        .footer-column h4{
          font-size:18px;
          margin-bottom:18px;
          color:white;
          position:relative;
        }

        .footer-column h4::after{
          content:"";
          position:absolute;
          left:0;
          bottom:-8px;

          width:35px;
          height:2px;

          background:#F59E0B;
        }


        /* TEXT */
        .footer-column p{
          color:#B8C1D1;
          font-size:15px;
          line-height:1.8;
          margin-bottom:8px;
        }


        /* LINKS */
        .footer-column a{
          display:block;
          color:#B8C1D1;
          text-decoration:none;

          margin-bottom:12px;

          cursor:pointer;

          transition:.3s ease;
          width:fit-content;
        }

        .footer-column a:hover{
          color:#F59E0B;
          transform:translateX(6px);
        }


        /* BRAND */
        .brand p{
          max-width:350px;
        }


        /* BOTTOM */
        .footer-bottom{
          border-top:1px solid rgba(255,255,255,.08);

          padding-top:15px;

          text-align:center;
        }

        .footer-bottom p{
          color:#8D98AE;
          font-size:14px;
          margin:0;
        }



        /* TABLET */
        @media(max-width:992px){

          .footer-container{
            grid-template-columns:1fr 1fr;
            gap:40px;
          }

          .brand{
            grid-column:span 2;
          }

        }



        /* MOBILE */
        @media(max-width:768px){

          .footer{
            padding:40px 20px 15px;
          }

          .footer-container{
            grid-template-columns:1fr;
            gap:35px;

            text-align:center;
          }

          .brand{
            grid-column:span 1;
          }

          .brand p{
            max-width:100%;
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