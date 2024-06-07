"use client";

import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";

import contactImg from "../../../public/images/contact-img.png";

interface ContactFormData {
  firstname: string;
  email: string;
  phonenumber: string;
  subject: string;
  message: string;
  consent: boolean;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstname: "",
    email: "",
    phonenumber: "",
    subject: "",
    message: "",
    consent: false,
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
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
        consent: false,
      });
    } catch (error) {
      setLoading(false);
      setErrorMessage(
        "There was an error sending your message. Please try again."
      );
    }
  };

  return (
    <div className="main-contact-area ptb-100">
      <div className="container">
        <div className="section-title">
          <span>Contact Us</span>
          <h2>Drop us a message for any query</h2>
          <p>
            If you have any questions or need assistance, feel free to reach out
            to us. We're here to help you streamline your healthcare practice.
          </p>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="contact-wrap contact-pages mb-0">
              <div className="contact-form">
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
                      <div className="form-group">
                        <input
                          type="checkbox"
                          name="consent"
                          checked={formData.consent}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor="consent">
                          I consent to having this website store my submitted
                          information so they can respond to my inquiry.
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-12 col-sm-12 pb-50">
                      <button type="submit" className="default-btn btn-two">
                        {loading ? "Sending..." : "Send Message"}
                      </button>
                    </div>

                    {successMessage && (
                      <div className="col-lg-12 col-sm-12">
                        <div className="alert alert-success">
                          {successMessage}
                        </div>
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

          <div className="col-lg-6 col-md-12">
            <div className="contact-img">
              <Image src={contactImg} alt="Image" width={807} height={704} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
