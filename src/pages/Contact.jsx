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

    const whatsappNumber = "918889093777";

    const text = `HI MOISRA Team, I want to know more about your services.
    Name: ${form.name}
    Email: ${form.email}
    Phone: ${form.phone}
    Service Interested In: ${form.service}
    
    Requirement: ${form.message}
    
    Please connect with me.`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`

    window.open(whatsappURL, "_blank")
  }
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
                <p>+91 88890 93777</p>
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
  background:
    linear-gradient(
      180deg,
      #ffffff 0%,
      #f8fafc 45%,
      #eef2ff 100%
    );
}


/* HERO */
.contact-hero{
  text-align:center;

  padding:120px 20px 70px;

  position:relative;
}

.contact-hero h1{
  font-size:48px;

  font-weight:800;

  color:#0F172A;

  margin-bottom:16px;

  letter-spacing:.5px;
}

.contact-hero p{
  color:#64748B;

  font-size:18px;

  max-width:700px;

  margin:auto;

  line-height:1.7;
}


/* MAIN */
.contact-container{
  max-width:1200px;

  margin:auto;

  padding:40px 20px 100px;

  display:grid;

  grid-template-columns:1fr 1fr;

  gap:60px;

  align-items:start;
}


/* LEFT */
.contact-info h2{
  font-size:38px;

  font-weight:800;

  color:#0F172A;

  margin-bottom:15px;
}

.subtitle{
  color:#64748B;

  margin-bottom:40px;

  line-height:1.8;

  font-size:16px;
}


/* INFO CARDS */
.info-card{
  display:flex;

  gap:20px;

  align-items:center;

  background:rgba(255,255,255,.8);

  backdrop-filter:blur(14px);

  border:1px solid rgba(255,255,255,.9);

  padding:24px;

  border-radius:18px;

  margin-bottom:20px;

  box-shadow:0 8px 25px rgba(15,23,42,.05);

  transition:.35s ease;
}

.info-card:hover{
  transform:translateY(-6px);

  box-shadow:0 18px 35px rgba(15,23,42,.08);
}

.info-card svg{
  font-size:26px;

  color:#F59E0B;

  flex-shrink:0;
}

.info-card strong{
  color:#0F172A;

  font-size:16px;
}

.info-card p{
  margin-top:4px;

  color:#64748B;
}


/* FORM */
.contact-form{
  background:rgba(255,255,255,.85);

  backdrop-filter:blur(20px);

  border:1px solid rgba(255,255,255,.9);

  padding:40px;

  border-radius:24px;

  box-shadow:0 20px 50px rgba(15,23,42,.08);

  display:flex;

  flex-direction:column;

  gap:18px;
}

.contact-form h3{
  font-size:28px;

  font-weight:800;

  color:#0F172A;

  margin-bottom:10px;
}


.contact-form input,
.contact-form select,
.contact-form textarea{

  padding:16px 18px;

  background:#F8FAFC;

  border:1px solid #E2E8F0;

  border-radius:12px;

  font-size:15px;

  color:#0F172A;

  outline:none;

  transition:.3s;
}

.contact-form input::placeholder,
.contact-form textarea::placeholder{
  color:#94A3B8;
}


.contact-form input:focus,
.contact-form select:focus,
.contact-form textarea:focus{

  border-color:#F59E0B;

  background:white;

  box-shadow:0 0 0 4px rgba(245,158,11,.12);
}


/* BUTTON */
.contact-form button{

  background:
    linear-gradient(
      135deg,
      #0F172A 0%,
      #1E3A8A 100%
    );

  color:white;

  border:none;

  border-radius:14px;

  padding:16px;

  font-weight:700;

  font-size:15px;

  cursor:pointer;

  transition:.35s ease;
}

.contact-form button:hover{

  transform:translateY(-3px);

  box-shadow:0 12px 30px rgba(15,23,42,.18);
}


/* CTA */
.contact-cta{

  text-align:center;

  background:
    linear-gradient(
      180deg,
      #EEF2FF 0%,
      #F8FAFC 100%
    );

  padding:90px 20px;
}

.contact-cta h2{

  font-size:36px;

  color:#0F172A;

  font-weight:800;

  margin-bottom:12px;
}

.contact-cta p{
  color:#64748B;
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
    font-size:30px;
  }

  .contact-info h2{
    font-size:28px;
  }

  .contact-form{
    padding:25px 20px;
  }

  .contact-form h3{
    font-size:22px;
  }

}

      `}</style>
    </>
  );
}

export default Contact;