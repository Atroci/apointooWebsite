"use client";

import React, { FormEvent, useState } from "react";
import axios from "axios";

interface FormValues {
  name: string;
  email: string;
  number: string;
  subject: string;
  message: string;
}

const AskQuestionForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    email: "",
    number: "",
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
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await axios.post("/api/submit-question", formValues); // Update the URL to your API endpoint
      setLoading(false);
      setSuccessMessage("Your question has been submitted successfully!");
      // Reset form data
      setFormValues({
        name: "",
        email: "",
        number: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);
      setErrorMessage(
        "There was an error submitting your question. Please try again."
      );
    }
  };

  return (
    <>
      <div className="faq-contact-area pb-100">
        <div className="container">
          <div className="ask-question">
            <div className="section-title">
              <h2>Ask Questions</h2>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="form-control"
                      value={formValues.name}
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
                      value={formValues.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="number"
                      placeholder="Phone number"
                      className="form-control"
                      value={formValues.number}
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
                      value={formValues.subject}
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
                      value={formValues.message}
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
    </>
  );
};

export default AskQuestionForm;
