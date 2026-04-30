import { useState } from "react";
import { useNavigate } from "react-router-dom";
import servicesData from "../data/servicesData";

function Header() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <>
      <header className="header">
        <div className="logo">MOISRA</div>

        <nav>
          <a>Home</a>
          <a>About</a>

          <div
            className="servicesTrigger"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
          >
            Services
          </div>

          <a>Clients</a>
          <a>Contact</a>
        </nav>
      </header>

      <div
        className={`megaMenu ${show ? "show" : ""}`}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <div className="megaContent">
          {servicesData.map((service) => (
            <div key={service.id} className="column">

              <h4
                onClick={() => navigate(`/services/${service.id}`)}
                style={{ cursor: "pointer" }}
              >
                {service.title}
              </h4>

              <div className="accordion">
                {service.sections.map((section) => (
                  <div key={section.id} className="item">

                    <div
                      className="parent"
                      onClick={() =>
                        setActiveMenu(
                          activeMenu === section.id ? null : section.id
                        )
                      }
                    >
                      {section.title}
                    </div>

                    <div
                      className={`submenu ${activeMenu === section.id ? "open" : ""
                        }`}
                    >
                      {section.items.map((item) => (
                        <a
                          key={item.slug}
                          onClick={() =>
                            navigate(`/services/${service.id}`, {
                              state: { scrollTo: section.id }
                            })
                          }
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>

                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 70px;
          background: #0B1C3D;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 60px;
          color: white;
          z-index: 1000;
        }

        .logo {
          font-size: 22px;
          font-weight: 700;
        }

        nav {
          display: flex;
          gap: 40px;
        }

        nav a,
        span {
          cursor: pointer;
        }

        /* MEGA MENU */

        .megaMenu {
          position: fixed;
          top: 70px;
          left: 0;
          width: 100%;
          background: white;
          box-shadow: 0 15px 40px rgba(0,0,0,.08);

          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all .25s ease;
          z-index: 999;
        }
          .megaMenu::before{
            content:"";
            position:absolute;
            top:-20px;
            left:0;
            width:100%;
            height:20px;
            background:transparent;
        }

        .megaMenu.show {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .megaContent {
          max-width: 1400px;
          margin: auto;
          padding: 40px 60px;

          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 40px;
        }

        .column h4 {
          margin-bottom: 12px;
          color: #0B1C3D;
        }

        .column a {
          display: block;
          margin: 8px 0;
          color: #444;
          font-size: 14px;
          cursor: pointer;
        }

        .column a:hover {
          color: #F59E0B;
        }

        /* responsive */

        @media(max-width:1100px){
          .megaContent{
            grid-template-columns:repeat(3,1fr);
          }
        }

        @media(max-width:700px){
          .megaContent{
            grid-template-columns:repeat(2,1fr);
            padding:30px 20px;
          }
        }
        
        .accordion {
display:flex;
flex-direction:column;
}

.parent{
cursor:pointer;
padding:6px 0;
font-size:14px;
color:#333;
}

.parent:hover{
color:#F59E0B;
}

.submenu{
max-height:0;
overflow:hidden;
transition:all .3s ease;
padding-left:15px;
}

.submenu.open{
max-height:200px;
margin-bottom:8px;
}

.submenu a{
display:block;
font-size:13px;
color:#666;
padding:4px 0;
cursor:pointer;
}

.submenu a:hover{
color:#F59E0B;
}

      `}</style>

    </>

  );
}

export default Header;