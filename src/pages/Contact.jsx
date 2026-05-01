import { useState } from "react";

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

  // ✅ Handle Submit (UI only for now)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Enquiry submitted!");
  };

  return (
    <>
      <div className="contact-page">

        {/* ✅ HERO */}
        <section className="contact-hero">
          <h1>Contact Us</h1>
          <p>Let’s discuss how we can help your business grow</p>
        </section>

        {/* ✅ MAIN SECTION */}
        <section className="contact-container">

          {/* LEFT: CONTACT INFO */}
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>We’re here to help you with your business needs.</p>

            <div className="info-box">
              <strong>Email:</strong>
              <p>moisra@gmail.com</p>
            </div>

            <div className="info-box">
              <strong>Phone:</strong>
              <p>+91 81200 01481</p>
            </div>

            <div className="info-box">
              <strong>Location:</strong>
              <p>India</p>
            </div>
          </div>

          {/* RIGHT: FORM */}
          <form className="contact-form" onSubmit={handleSubmit}>

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
              <option>Construction Consulting</option>
              <option>Finance & Loans</option>
            </select>

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
            />

            <button type="submit">Send Enquiry</button>

          </form>
        </section>

        {/* ✅ CTA STRIP */}
        <section className="contact-cta">
          <h2>Looking for Immediate Assistance?</h2>
          <p>Reach out to us and our team will respond quickly.</p>
        </section>

      </div>

      {/* ✅ STYLES */}
      <style jsx>{`
        .contact-page {
          font-family: sans-serif;
        }

        /* HERO */
        .contact-hero {
          background: linear-gradient(135deg, #0B1C3D, #163E7A);
          color: white;
          text-align: center;
          padding: 100px 20px;
        }

        .contact-hero h1 {
          font-size: 40px;
        }

        /* MAIN */
        .contact-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
          max-width: 1100px;
          margin: auto;
          padding: 80px 20px;
        }

        /* LEFT */
        .contact-info h2 {
          margin-bottom: 10px;
        }

        .contact-info p {
          color: #555;
          margin-bottom: 20px;
        }

        .info-box {
          margin-bottom: 20px;
        }

        /* FORM */
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
          background: white;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.08);
        }

        .contact-form input,
        .contact-form select,
        .contact-form textarea {
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 5px;
          font-size: 14px;
        }

        .contact-form button {
          background: #0B1C3D;
          color: white;
          padding: 12px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-weight: bold;
        }

        .contact-form button:hover {
          background: #163E7A;
        }

        /* CTA */
        .contact-cta {
          background: #f8f9fc;
          text-align: center;
          padding: 60px 20px;
        }
      `}</style>
    </>
  );
}

export default Contact;