"use client";

import React, { useState } from "react";
import axios from "axios";

interface ContactFormData {
  firstname: string;
  email: string;
  phonenumber: string;
  subject: string;
  message: string;
}

const ContactFormStyleTwo: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstname: "",
    email: "",
    phonenumber: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await axios.post("/api/mailbox-brevo", formData);
      setLoading(false);
      setSuccessMessage("Your message has been sent successfully!");
      // Reset form data
      setFormData({
        firstname: "",
        email: "",
        phonenumber: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);
      setErrorMessage(
        "There was an error sending your message. Please try again."
      );
    }
  };

  return (
    <div className="main-contact-area pb-100">
      <div className="container">
        <div className="contact-wrap contact-pages mb-0">
          <div className="contact-form">
            <div className="section-title">
              <h2>Drop us a message for any query</h2>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="firstname"
                      placeholder="First Name"
                      className="form-control"
                      value={formData.firstname}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="phonenumber"
                      placeholder="Phone Number"
                      className="form-control"
                      value={formData.phonenumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      className="form-control"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      cols={30}
                      rows={6}
                      placeholder="Write your message..."
                      className="form-control"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-12 col-sm-12">
                  <button type="submit" className="default-btn btn-two">
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </div>

                {successMessage && (
                  <div className="col-lg-12 col-sm-12">
                    <div className="alert alert-success">{successMessage}</div>
                  </div>
                )}
                {errorMessage && (
                  <div className="col-lg-12 col-sm-12">
                    <div className="alert alert-danger">{errorMessage}</div>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormStyleTwo;
