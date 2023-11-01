import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    yourName: "",
    yourEmail: "",
    yourPhone: "",
    yourMessage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, you can use formData state
  };

  return (
      <div className="green-contact-form p-5 bg-white">
      <div className="title-form mb-5">
        <h3>Get in touch</h3>
        <p>
          We’re very approachable and would love to speak to you. Feel free to
          call, send us an email, Tweet us or simply complete the enquiry form.
        </p>
      </div>

      <div className="form-box">
        <h4>Send Us a Message</h4>

        <form onSubmit={handleSubmit}>
          <fieldset className="form-group">
            <label htmlFor="yourName">Your Name (required)</label>
            <input
              type="text"
              className="form-control"
              id="yourName"
              name="yourName"
              placeholder="Enter Your Name"
              value={formData.yourName}
              onChange={handleChange}
              required
            />
          </fieldset>

          <fieldset className="form-group">
            <label htmlFor="yourEmail">Email Address (required)</label>
            <input
              type="email"
              className="form-control"
              id="yourEmail"
              name="yourEmail"
              placeholder="Enter Your Email"
              value={formData.yourEmail}
              onChange={handleChange}
              required
            />
          </fieldset>

          <fieldset className="form-group">
            <label htmlFor="yourPhone">Telephone number</label>
            <input
              type="text"
              className="form-control"
              id="yourPhone"
              name="yourPhone"
              placeholder="Enter Your Phone"
              value={formData.yourPhone}
              onChange={handleChange}
            />
          </fieldset>

          <fieldset className="form-group">
            <label htmlFor="yourMessage">Your message (required)</label>
            <textarea
              className="form-control"
              rows="6"
              id="yourMessage"
              name="yourMessage"
              value={formData.yourMessage}
              onChange={handleChange}
              required
            />
          </fieldset>
          <button type="submit" className="btn btn-dark">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
    
  );
};

export default ContactUs;
