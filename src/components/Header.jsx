import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import servicesData from "../data/servicesData";

function Header() {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSection, setActiveSection] = useState("home");

  // ✅ Smooth scroll
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 70;
      const top = element.offsetTop - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  // ✅ Active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "clients", "contact"];
      let current = "home";

      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="header">
        <div className="logo">MOISRA</div>

        <nav>
          <a
            className={activeSection === "home" ? "active" : ""}
            onClick={() => scrollToSection("home")}
          >
            Home
          </a>

          <a
            className={activeSection === "about" ? "active" : ""}
            onClick={() => scrollToSection("about")}
          >
            About
          </a>

          {/* ✅ Services (UNCHANGED) */}
          <div
            className="servicesTrigger"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
          >
            Services
          </div>

          <a
            className={activeSection === "clients" ? "active" : ""}
            onClick={() => scrollToSection("clients")}
          >
            Clients
          </a>

          <a
            className={activeSection === "contact" ? "active" : ""}
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </a>
        </nav>
      </header>

      {/* ✅ MEGA MENU */}
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

                    {/* ✅ FIXED ACCORDION */}
                    <div
                      className={`submenu ${
                        activeMenu === section.id ? "open" : ""
                      }`}
                    >
                      {section.items.map((item) => (
                        <a
                          key={item.slug}
                          onClick={() =>
                            navigate(`/services/${service.id}`, {
                              state: { scrollTo: section.id },
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

      {/* ✅ STYLES */}
      <style jsx>{`
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;

  background: linear-gradient(
    135deg,
    #020617 0%,
    #1E1B4B 45%,
    #0F766E 100%
  );

  backdrop-filter: blur(12px);

  border-bottom: 1px solid rgba(255,255,255,.08);

  box-shadow: 0 8px 30px rgba(0,0,0,.18);

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 60px;

  z-index: 1000;
}

        .logo {
  font-size: 24px;
  font-weight: 800;

  color: #FFFFFF;

  letter-spacing: 1px;

  flex-shrink: 0;

  text-transform: uppercase;

  text-shadow: 0 2px 10px rgba(0,0,0,.25);
}

        nav {
          display: flex;
          gap: 40px;
          align-items: center;
        }

        nav a {
          cursor: pointer;
          position: relative;
          color: var(--text-light);
          font-size: var(--fs-sm);
          white-space: nowrap;
        }

        nav a.active {
          color: var(--accent);
          font-weight: 600;
        }

        nav a.active::after {
          content: "";
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(
  90deg,
  #FBBF24,
  #F59E0B
);
        }

        /* MEGA MENU */
        .megaMenu {
          position: fixed;
          top: 70px;
          left: 0;
          width: 100%;
          background: white;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.25s ease;
          z-index: 999;
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
          color: #0b1c3d;
        }

        .column a {
          display: block;
          margin: 8px 0;
          color: #444;
          font-size: 14px;
          cursor: pointer;
        }

        .column a:hover {
          color: #f59e0b;
        }

        .accordion {
          display: flex;
          flex-direction: column;
        }

        .parent {
          cursor: pointer;
          padding: 6px 0;
          font-size: 14px;
          color: #333;
        }

        /* ✅ FIXED ACCORDION CSS */
        .submenu {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  padding-left: 15px;
  opacity: 0;
}

.submenu.open {
  max-height: 600px; /* large enough for content */
  opacity: 1;
}

/* ===========================
   MOBILE HEADER
=========================== */

@media (max-width:900px){

  .header{
    padding: 0 16px;
    height: auto;
    min-height: 70px;

    flex-direction: column;
    justify-content: center;

    gap: 12px;

    padding-top: 12px;
    padding-bottom: 12px;
  }

  nav{
    width:100%;

    gap:16px;

    overflow-x:auto;

    justify-content:flex-start;

    padding-bottom:4px;

    scrollbar-width:none;
  }

  nav::-webkit-scrollbar{
    display:none;
  }

  .megaMenu{
    top:110px;
  }

  .megaContent{
    grid-template-columns:1fr;
    padding:20px;
  }

}
      `}</style>
    </>
  );
}

export default Header;