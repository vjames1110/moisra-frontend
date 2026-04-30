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

          {/* IT Solutions */}
          <div className="column">
            <h4>IT Solutions</h4>

            <div className="accordion">
              <div className="item">
                <div
                  className="parent"
                  onClick={() => setActiveMenu(activeMenu === "it-dev" ? null : "it-dev")}
                >
                  Development
                </div>
                <div className={`submenu ${activeMenu === "it-dev" ? "open" : ""}`}>
                  <a
                    onClick={() =>
                      navigate("/services/it-solutions", {
                        state: { scrollTo: "development"}
                      })
                    }>
                      Web Development</a>
                  <a
                    onClick={() =>
                      navigate("/services/it-solutions", {
                        state: { scrollTo: "development"}
                      })
                    }
                  >
                    App Development
                  </a>
                  <a
                    onClick={() =>
                      navigate("/services/it-solutions", {
                        state: { scrollTo: "development"}
                      })
                    }
                  >
                    Software Development
                  </a>
                  <a
                    onClick={() =>
                      navigate("/services/it-solutions", {
                        state: { scrollTo: "development"}
                      })
                    }
                  >
                    ERP Development
                  </a>
                  <a
                    onClick={() =>
                      navigate("/services/it-solutions", {
                        state: { scrollTo: "development"}
                      })
                    }
                  >
                    HR & Administration IT Solutions
                  </a>
                </div>
              </div>
              <div className="item">
                <div
                  className="parent"
                  onClick={() => setActiveMenu(activeMenu === "it-erp" ? null : "it-erp")}
                >
                  ERP Solutions
                </div>
                <div className={`submenu ${activeMenu === "it-erp" ? "open" : ""}`}>
                  <a
                    onClick={() =>
                      navigate("/services/it-solutions", {
                        state: { scrollTo: "erp-solutions"}
                      })
                    }
                  >
                    SAP
                  </a>
                  <a
                    onClick={() =>
                      navigate("/services/it-solutions", {
                        state: { scrollTo: "erp-solutions"}
                      })
                    }
                  >
                    Talley ERP
                  </a>
                  <a
                    onClick={() =>
                      navigate("/services/it-solutions", {
                        state: { scrollTo: "erp-solutions"}
                      })
                    }
                  >
                    ERP
                  </a>
                  <a
                    onClick={() =>
                      navigate("/services/it-solutions", {
                        state: { scrollTo: "erp-solutions"}
                      })
                    }
                  >
                    ERP Training
                  </a>
                </div>
              </div>
              <div className="item">
                <div
                  className="parent"
                  onClick={() => setActiveMenu(activeMenu === "it-planning" ? null : "it-planning")}
                >
                  Planning & Strategy
                </div>
                <div className={`submenu ${activeMenu === "it-planning" ? "open" : ""}`}>
                  <a
                    onClick={() =>
                      navigate("/services/it-solutions", {
                        state: { scrollTo: "planning-strategy"}
                      })
                    }
                  >
                    Primavera
                  </a>
                  <a
                    onClick={() =>
                      navigate("/services/it-solutions", {
                        state: { scrollTo: "planning-strategy"}
                      })
                    }
                  >
                    MSP
                  </a>
                  <a
                    onClick={() =>
                      navigate("/services/it-solutions", {
                        state: { scrollTo: "planning-strategy"}
                      })
                    }
                  >
                    PROCORE
                  </a>
                  <a
                    onClick={() =>
                      navigate("/services/it-solutions", {
                        state: { scrollTo: "planning-strategy"}
                      })
                    }
                  >
                    Weighbridge Callibration
                  </a>
                </div>
              </div>
              <div className="item">
                <div
                  className="parent"
                  onClick={() => setActiveMenu(activeMenu === "it-design" ? null : "it-design")}
                >
                  3D Designing
                </div>
                <div className={`submenu ${activeMenu === "it-design" ? "open" : ""}`}>
                  <a
                    onClick={() =>
                      navigate("/services/it-solutions", {
                        state: { scrollTo: "3d-design"}
                      })
                    }
                  >
                    AutoCAD
                  </a>
                  <a
                    onClick={() =>
                      navigate("/services/it-solutions", {
                        state: { scrollTo: "3d-design"}
                      })
                    }
                  >
                    BIM360
                  </a>
                  <a
                    onClick={() =>
                      navigate("/services/it-solutions", {
                        state: { scrollTo: "3d-design"}
                      })
                    }
                  >
                    Staad
                  </a>
                </div>
              </div>
              <div className="item">
                <div
                  className="parent"
                  onClick={() => setActiveMenu(activeMenu === "it-analytics" ? null : "it-analytics")}
                >
                  Performance Analytics
                </div>
                <div className={`submenu ${activeMenu === "it-analytics" ? "open" : ""}`}>
                  <a
                    onClick={() =>
                      navigate("/services/it-solutions", {
                        state: { scrollTo: "performance-analytics"}
                      })
                    }
                  >
                    Data Analytics
                  </a>
                  <a
                    onClick={() =>
                      navigate("/services/it-solutions", {
                        state: { scrollTo: "performance-analytics"}
                      })
                    }
                  >
                    Business Analytics
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Workforce Solutions */}
          <div className="column">
            <h4>Workforce Solutions</h4>

            <div className="accordion">
              <div className="item">
                <div
                  className="parent"
                  onClick={() => setActiveMenu(activeMenu === "work-manpower" ? null : "work-manpower")}
                >
                  Manpower Supply
                </div>
                <div className={`submenu ${activeMenu === "work-manpower" ? "open" : ""}`}>
                  <a>Skilled Labour</a>
                  <a>Unskilled Labour</a>
                  <a>Contract Staffing</a>
                  <a>Permanent Staffing</a>
                </div>
              </div>
              <div className="item">
                <div
                  className="parent"
                  onClick={() => setActiveMenu(activeMenu === "work-training" ? null : "work-training")}
                >
                  Training Programs
                </div>
                <div className={`submenu ${activeMenu === "work-training" ? "open" : ""}`}>
                  <a>Technical Training</a>
                  <a>Safety Training</a>
                  <a>Industrial Training</a>
                  <a>Executive Development</a>
                  <a>Soft Skills Training</a>
                  <a>HR & Administration Training</a>
                  <a>Leadership Development</a>
                  <a>Project Management Training</a>
                </div>
              </div>
              <div className="item">
                <div
                  className="parent"
                  onClick={() => setActiveMenu(activeMenu === "job-placement" ? null : "job-placement")}
                >
                  Job Placement
                </div>
                <div className={`submenu ${activeMenu === "job-placement" ? "open" : ""}`}>
                  <a>Placement</a>
                  <a>Campus Recruitment</a>
                  <a>Resume Building</a>
                </div>
              </div>
            </div>
          </div>

          {/* Machinery & Equipment */}

          <div className="column">
            <h4>Machinery & Equipment</h4>

            <div className="accordion">
              <div className="item">
                <div
                  className="parent"
                  onClick={() => setActiveMenu(activeMenu === "machinery-maintenance" ? null : "machinery-maintenance")}
                >
                  Machinery Maintenance
                </div>
                <div className={`submenu ${activeMenu === "machinery-maintenance" ? "open" : ""}`}>
                  <a>HMV Maintenance</a>
                  <a>LMV Maintenance</a>
                  <a>Plant & Crusher Maintenance</a>
                </div>
              </div>
              <div className="item">
                <div
                  className="parent"
                  onClick={() => setActiveMenu(activeMenu === "machine-rental" ? null : "machine-rental")}
                >
                  Machine Rental
                </div>
                <div className={`submenu ${activeMenu === "machine-rental" ? "open" : ""}`}>
                  <a>HMV Rental</a>
                  <a>LMV Rental</a>
                  <a>Plant & Crusher Rental</a>
                  <a>Equipment Rental</a>
                </div>
              </div>
              <div className="item">
                <div
                  className="parent"
                  onClick={() => setActiveMenu(activeMenu === "machine-sales" ? null : "machine-sales")}
                >
                  Machine Sales & Purchase
                </div>
                <div className={`submenu ${activeMenu === "machine-sales" ? "open" : ""}`}>
                  <a>Old Machine Sales</a>
                  <a>Old Machine Purchase</a>
                  <a>New Machine Purchase</a>
                </div>
              </div>
            </div>
          </div>

          {/* Civil & Construction */}

          <div className="column">
            <h4>Civil & Construction</h4>

            <div className="accordion">
              <div className="item">
                <div
                  className="parent"
                  onClick={() => setActiveMenu(activeMenu === "subcontracting" ? null : "subcontracting")}
                >
                  Sub Contracting
                </div>
                <div className={`submenu ${activeMenu === "subcontracting" ? "open" : ""}`}>
                  <a>B2B</a>
                  <a>B2C</a>
                </div>
              </div>
              <div className="item">
                <div
                  className="parent"
                  onClick={() => setActiveMenu(activeMenu === "civil-construction" ? null : "civil-construction")}
                >
                  Construction Work
                </div>
                <div className={`submenu ${activeMenu === "civil-construction" ? "open" : ""}`}>
                  <a>Building Construction</a>
                  <a>Civil Construction</a>
                  <a>Road Construction</a>
                  <a>Bridge Construction</a>
                  <a>Industrial Construction</a>
                </div>
              </div>
              <div className="item">
                <div
                  className="parent"
                  onClick={() => setActiveMenu(activeMenu === "miscellaneous" ? null : "miscellaneous")}
                >
                  Miscellaneous Work
                </div>
                <div className={`submenu ${activeMenu === "miscellaneous" ? "open" : ""}`}>
                  <a>Bitumin Work</a>
                  <a>Curshing & Screening</a>
                  <a>Earth Work</a>
                  <a>Electrical Work</a>
                  <a>Fabrication Work</a>
                  <a>Interior Work</a>
                  <a>Plumbing Work</a>
                  <a>Road Marking</a>
                  <a>P-Way Work</a>
                </div>
              </div>
            </div>
          </div>

          {/* Transportation & Logistics */}

          <div className="column">
            <h4>Transportation & Logistics Solutions</h4>

            <div className="accordion">
              <div className="item">
                <div
                  className="parent"
                  onClick={() => setActiveMenu(activeMenu === "logistics" ? null : "logistics")}
                >
                  Logistics
                </div>
                <div className={`submenu ${activeMenu === "logistics" ? "open" : ""}`}>
                  <a>Shifting</a>
                  <a>Transportation</a>
                  <a>Point to Point</a>
                  <a>Weight Wise</a>
                  <a>Container Transport</a>
                  <a>Rack Loading</a>
                </div>
              </div>
              <div className="item">
                <div
                  className="parent"
                  onClick={() => setActiveMenu(activeMenu === "scm" ? null : "scm")}
                >
                  Supply Chain Management
                </div>
                <div className={`submenu ${activeMenu === "scm" ? "open" : ""}`}>
                  <a>Logistics Management</a>
                  <a>GPS Tracking</a>
                  <a>Inventory Management</a>
                  <a>Warehouse Management</a>
                  <a>Distribution Management</a>
                </div>
              </div>
            </div>
          </div>

          {/* Finance & Insurance */}

          <div className="column">
            <h4>Finance & Insurance</h4>

            <div className="accordion">
              <div className="item">
                <div
                  className="parent"
                  onClick={() => setActiveMenu(activeMenu === "finance" ? null : "finance")}
                >
                  Finance
                </div>
                <div className={`submenu ${activeMenu === "finance" ? "open" : ""}`}>
                  <a>Business Loan</a>
                  <a>Project Funding</a>
                  <a>Bank Guarantee - BG</a>
                  <a>Credit Limit - CC</a>
                  <a>Equipment Loan</a>
                  <a>Capital Loan</a>
                </div>
              </div>
              <div className="item">
                <div
                  className="parent"
                  onClick={() => setActiveMenu(activeMenu === "insurance" ? null : "insurance")}
                >
                  Insurance
                </div>
                <div className={`submenu ${activeMenu === "insurance" ? "open" : ""}`}>
                  <a>Vehicle Insurance</a>
                  <a>Health Insurance</a>
                  <a>WC Policy</a>
                  <a>Term Insurance</a>
                  <a>CAR Policy</a>
                </div>
              </div>
            </div>
          </div>

          {/* Accounting */}

          <div className="column">
            <h4>Accounts & Taxation Services</h4>

            <div className="accordion">
              <div className="item">
                <div
                  className="parent"
                  onClick={() => setActiveMenu(activeMenu === "accounts" ? null : "accounts")}
                >
                  Accounts
                </div>
                <div className={`submenu ${activeMenu === "accounts" ? "open" : ""}`}>
                  <a>Accounting</a>
                  <a>Book Keeping</a>
                  <a>Audit</a>
                  <a>Financial Reporting</a>
                  <a>Payroll Management</a>
                  <a>Compliance Management</a>
                </div>
              </div>
              <div className="item">
                <div
                  className="parent"
                  onClick={() => setActiveMenu(activeMenu === "taxation" ? null : "taxation")}
                >
                  Taxation & Compliances
                </div>
                <div className={`submenu ${activeMenu === "taxation" ? "open" : ""}`}>
                  <a>Goods & Service Tax - GST</a>
                  <a>TDS</a>
                  <a>PF</a>
                  <a>ESIC</a>
                  <a>Professional Tax</a>
                  <a>ROC Filing</a>
                </div>
              </div>
            </div>
          </div>

          {/* Industrial Supplies */}

          <div className="column">
            <h4>Industrial Supplies</h4>

            <div className="accordion">
              <div className="item">
                <div
                  className="parent"
                  onClick={() => setActiveMenu(activeMenu === "aggregate" ? null : "aggregate")}
                >
                  Aggregate Supply
                </div>
                <div className={`submenu ${activeMenu === "aggregate" ? "open" : ""}`}>
                  <a>Sand Supply</a>
                  <a>Aggregate</a>
                  <a>Cement</a>
                </div>
              </div>
              <div className="item">
                <div
                  className="parent"
                  onClick={() => setActiveMenu(activeMenu === "consumables" ? null : "consumables")}
                >
                  Consumables Supply
                </div>
                <div className={`submenu ${activeMenu === "consumables" ? "open" : ""}`}>
                  <a>TMT</a>
                  <a>Structural Steel</a>
                  <a>Girder</a>
                  <a>Chemical</a>
                  <a>Bitumin</a>
                  <a>Concrete</a>
                </div>
              </div>
              <div className="item">
                <div
                  className="parent"
                  onClick={() => setActiveMenu(activeMenu === "mechanical" ? null : "mechanical")}
                  >
                  Mechanical Supply
                </div>
                <div className={`submenu ${activeMenu === "mechanical" ? "open" : ""}`}>
                  <a>Electrical Supply</a>
                  <a>Spare Parts</a>
                  <a>Tyre</a>
                  <a>Battery</a>
                  </div>
              </div>
            </div>
          </div>
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