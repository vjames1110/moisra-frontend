import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import servicesData from "../data/servicesData";

function ServiceDetail() {

  const { id } = useParams();
  const location = useLocation();

  const [activeSection, setActiveSection] =
    useState(null);

  const [selectedItem, setSelectedItem] =
    useState(null);


  const service =
    servicesData.find(
      (s) => s.id === id
    );


  useEffect(() => {

    if (
      location.state?.scrollTo
    ) {

      const el =
        document.getElementById(
          location.state.scrollTo
        );

      if (el) {

        const yOffset =
          -90;

        const y =
          el.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;

        window.scrollTo({
          top: y,
          behavior:
            "smooth"
        });

      }

    }

  }, [location]);


  useEffect(() => {

    const handleScroll =
      () => {

        service?.sections.forEach(
          (
            section
          ) => {

            const el =
              document.getElementById(
                section.id
              );

            if (
              el
            ) {

              const rect =
                el.getBoundingClientRect();

              if (
                rect.top <=
                  150 &&
                rect.bottom >=
                  150
              ) {

                setActiveSection(
                  section.id
                );

              }

            }

          }
        );

      };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, [service]);


  const openWhatsapp =
    (
      title
    ) => {

      const whatsappNumber =
        "918889093777";

      const text =
        `Hi MOISRA Team, I want to know more about ${title}`;

      const url =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

      window.open(
        url,
        "_blank"
      );

    };


  if (!service)
    return <h2>Not Found</h2>;


  return (
    <>
      <div className="service-page">


        {/* HERO */}
        <section className="service-hero">

          <h1>
            {
              service.title
            }
          </h1>

          <p>
            {
              service.description
            }
          </p>

        </section>


        {/* MAIN */}
        <section className="service-main">


          {/* SIDEBAR */}
          <div className="service-sidebar">

            {service.sections.map(
              (
                section
              ) => (

                <div
                  key={
                    section.id
                  }
                  className={`nav-item ${
                    activeSection ===
                    section.id
                      ? "active"
                      : ""
                  }`}
                  onClick={() => {

                    const el =
                      document.getElementById(
                        section.id
                      );

                    el.scrollIntoView({
                      behavior:
                        "smooth"
                    });

                  }}
                >
                  {
                    section.title
                  }
                </div>

              )
            )}

          </div>


          {/* CONTENT */}
          <div className="service-content">

            {service.sections.map(
              (
                section
              ) => (

                <div
                  key={
                    section.id
                  }
                  id={
                    section.id
                  }
                  className="service-block"
                >

                  <h2>
                    {
                      section.title
                    }
                  </h2>


                  <div className="tags">

                    {section.items.map(
                      (
                        item,
                        i
                      ) => (

                        <span
                          key={i}
                          onClick={() =>
                            setSelectedItem(
                              item
                            )
                          }
                        >
                          {
                            item.name
                          }
                        </span>

                      )
                    )}

                  </div>

                </div>

              )
            )}

          </div>

        </section>


        {/* MODAL */}
        {selectedItem && (

          <div
            className="modal-overlay"
            onClick={() =>
              setSelectedItem(
                null
              )
            }
          >

            <div
              className="modal-box"
              onClick={(e) =>
                e.stopPropagation()
              }
            >

              <button
                className="close-btn"
                onClick={() =>
                  setSelectedItem(
                    null
                  )
                }
              >
                ×
              </button>


              <img
                src={
                  selectedItem.image
                }
                alt=""
              />


              <h2>
                {
                  selectedItem.name
                }
              </h2>


              <p>
                {
                  selectedItem.description
                }
              </p>


              <button
                className="whatsapp-btn"
                onClick={() =>
                  openWhatsapp(
                    selectedItem.name
                  )
                }
              >
                Contact On WhatsApp
              </button>

            </div>

          </div>

        )}

      </div>


      <style jsx>{`

.service-page{
  background:white;
}


/* HERO */
.service-hero{

  padding:140px 20px;

  text-align:center;

  background:
  linear-gradient(
    135deg,
    #1E1B4B,
    #0F172A
  );

  color:white;
}



/* MAIN */
.service-main{

  max-width:1400px;

  margin:auto;

  padding:100px 40px;

  display:flex;

  gap:50px;
}



/* SIDEBAR */
.service-sidebar{

  width:280px;

  position:sticky;

  top:100px;

  height:fit-content;
}


.nav-item{

  padding:16px;

  border-radius:12px;

  cursor:pointer;

  margin-bottom:10px;

  transition:.3s;
}


.nav-item.active{

  background:#0F172A;

  color:white;
}



/* CONTENT */
.service-content{
  flex:1;
}


.service-block{
  margin-bottom:70px;
}


.tags{

  display:flex;

  flex-wrap:wrap;

  gap:14px;
}


.tags span{

  padding:14px 20px;

  border-radius:14px;

  background:white;

  border:1px solid #ddd;

  cursor:pointer;

  transition:.3s;
}


.tags span:hover{

  transform:translateY(-5px);

  border-color:#F59E0B;
}



/* MODAL */
.modal-overlay{

  position:fixed;

  inset:0;

  background:
  rgba(0,0,0,.55);

  backdrop-filter:
  blur(8px);

  display:flex;

  justify-content:center;

  align-items:center;

  z-index:999;
}


.modal-box{

  width:500px;

  max-width:90%;

  background:white;

  border-radius:20px;

  padding:35px;

  position:relative;

  animation:
  popup .35s ease;
}


@keyframes popup{

  from{
    transform:
    scale(.8);
    opacity:0;
  }

  to{
    transform:
    scale(1);
    opacity:1;
  }

}


.close-btn{

  position:absolute;

  right:18px;

  top:18px;

  border:none;

  background:none;

  font-size:28px;

  cursor:pointer;
}


.modal-box img{

  width:100%;

  height:250px;

  object-fit:cover;

  border-radius:14px;

  margin-bottom:20px;
}


.modal-box h2{

  margin-bottom:15px;

  color:#0F172A;
}


.modal-box p{

  color:#475569;

  line-height:1.7;
}


.whatsapp-btn{

  margin-top:25px;

  width:100%;

  border:none;

  padding:16px;

  border-radius:12px;

  background:#F59E0B;

  color:white;

  font-weight:700;

  cursor:pointer;
}


@media(max-width:900px){

  .service-main{
    flex-direction:column;
  }

  .service-sidebar{
    width:100%;
    position:static;
  }

}

      `}</style>
    </>
  );
}

export default ServiceDetail;