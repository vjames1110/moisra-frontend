import { useState } from "react";
import * as FaIcons from "react-icons/fa";

function Contact() {

  // ✅ Form State (ready for backend later)
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  // ✅ Handle Input Change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // ✅ Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Enquiry submitted!");
  };

  return (
    <>
      <div className="contact-page">

        {/* HERO */}
        <section className="contact-hero">
          <h1>Let's Build Something Great</h1>
          <p>
            Connect with MOISRA and discover tailored consultancy solutions.
          </p>
        </section>


        {/* MAIN */}
        <section className="contact-container">

          {/* LEFT SIDE */}
          <div className="contact-info">

            <h2>Get in Touch</h2>

            <p className="subtitle">
              Whether you're a startup, enterprise, or project owner—
              our team is ready to support your journey.
            </p>


            <div className="info-card">
              <FaIcons.FaEnvelope />
              <div>
                <strong>Email</strong>
                <p>moisra@gmail.com</p>
              </div>
            </div>


            <div className="info-card">
              <FaIcons.FaPhoneAlt />
              <div>
                <strong>Phone</strong>
                <p>+91 81200 01481</p>
              </div>
            </div>


            <div className="info-card">
              <FaIcons.FaMapMarkerAlt />
              <div>
                <strong>Location</strong>
                <p>India</p>
              </div>
            </div>

          </div>


          {/* RIGHT SIDE */}
          <form className="contact-form" onSubmit={handleSubmit}>

            <h3>Request Consultation</h3>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
            />

            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              required
            >
              <option value="">Select Service</option>
              <option>IT Solutions</option>
              <option>Workforce Solutions</option>
              <option>Machinery & Equipment</option>
              <option>Civil & Construction</option>
              <option>Transportation & Logistics</option>
              <option>Finance & Insurance</option>
              <option>Accounts & Taxation</option>
              <option>Industrial Supplies</option>
            </select>

            <textarea
              name="message"
              rows="5"
              placeholder="Tell us about your requirement..."
              value={form.message}
              onChange={handleChange}
              required
            />

            <button type="submit">
              Send Enquiry
            </button>

          </form>

        </section>


        {/* CTA */}
        <section className="contact-cta">
          <h2>Need Immediate Assistance?</h2>
          <p>Our experts are ready to connect with you.</p>
        </section>

      </div>


      <style jsx>{`
        .contact-page{
          background:#fff;
        }


        /* HERO */
        .contact-hero{
          text-align:center;
          padding:100px 20px 60px;
        }

        .contact-hero h1{
          font-size:40px;
          color:#0B1C3D;
          margin-bottom:15px;
        }

        .contact-hero p{
          color:#666;
        }


        /* MAIN */
        .contact-container{
          max-width:1200px;
          margin:auto;
          padding:40px 20px 100px;

          display:grid;
          grid-template-columns:1fr 1fr;
          gap:50px;
          align-items:start;
        }


        /* LEFT */
        .contact-info h2{
          color:#0B1C3D;
          margin-bottom:15px;
        }

        .subtitle{
          color:#666;
          margin-bottom:35px;
          line-height:1.6;
        }


        .info-card{
          display:flex;
          gap:20px;
          align-items:center;

          background:#F8FAFC;
          padding:20px;
          border-radius:12px;

          margin-bottom:20px;
        }

        .info-card svg{
          font-size:22px;
          color:#F59E0B;
          flex-shrink:0;
        }

        .info-card p{
          margin-top:4px;
          color:#666;
        }


        /* FORM */
        .contact-form{
          background:white;
          padding:35px;

          border-radius:16px;

          box-shadow:0 15px 40px rgba(0,0,0,.08);

          display:flex;
          flex-direction:column;
          gap:16px;
        }

        .contact-form h3{
          color:#0B1C3D;
          margin-bottom:10px;
        }


        .contact-form input,
        .contact-form select,
        .contact-form textarea{

          padding:14px;

          border:1px solid #ddd;
          border-radius:8px;

          font-size:14px;
          outline:none;

          transition:.3s;
        }


        .contact-form input:focus,
        .contact-form select:focus,
        .contact-form textarea:focus{
          border-color:#F59E0B;
        }


        .contact-form button{
          background:#0B1C3D;
          color:white;

          border:none;
          border-radius:8px;

          padding:14px;

          font-weight:600;
          cursor:pointer;

          transition:.3s;
        }

        .contact-form button:hover{
          background:#F59E0B;
        }


        /* CTA */
        .contact-cta{
          text-align:center;
          background:#F8FAFC;

          padding:70px 20px;
        }

        .contact-cta h2{
          color:#0B1C3D;
          margin-bottom:10px;
        }


        /* TABLET */
        @media(max-width:900px){

          .contact-container{
            grid-template-columns:1fr;
          }

        }


        /* MOBILE */
        @media(max-width:600px){

          .contact-hero h1{
            font-size:28px;
          }

          .contact-form{
            padding:25px 20px;
          }

        }

      `}</style>
    </>
  );
}

export default Contact;