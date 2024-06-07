"use client";

import React from "react";
import ServiceSidebar from "./ServiceSidebar";
import AskQuestionForm from "./AskQuestionForm";
import Image from "next/image";

import servicesDetailsImg from "../../../public/images/services-details/services-details.jpg";
import servicesDetailsImg2 from "../../../public/images/services-details/services-details2.png";

const DevDetailsContent: React.FC = () => {
  return (
    <>
      <div className="service-details-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="service-details-wrap">
                <div className="service-img">
                  <Image
                    src={servicesDetailsImg}
                    alt="Image"
                    width={900}
                    height={500}
                  />
                </div>

                <h3>Appointment Scheduling Software</h3>
                <p>
                  Apointoo is the ideal appointment scheduling software for
                  practices seeking a straightforward, ready-to-use platform
                  that streamlines the entire appointment booking process.
                  Designed with both healthcare providers and patients in mind,
                  Apointoo offers a range of features that enhance operational
                  efficiency, improve patient experience, and simplify
                  administrative tasks.
                </p>
                <h4>Key Features:</h4>
                <ul>
                  <li>
                    <strong>User-Friendly Interface:</strong> Intuitive design
                    that is easy to navigate for both staff and patients. Quick
                    setup with minimal training required, allowing your practice
                    to start using the software immediately.
                  </li>
                  <li>
                    <strong>Automated Scheduling:</strong> Reduces manual entry
                    errors with automated appointment bookings. Sends automated
                    reminders via email or SMS to reduce no-shows and improve
                    appointment adherence.
                  </li>
                  <li>
                    <strong>Customizable Booking Pages:</strong> Personalize
                    booking pages to match your practice's branding. Allows
                    patients to book appointments online at their convenience.
                  </li>
                  <li>
                    <strong>Real-Time Availability:</strong> Provides real-time
                    updates on appointment availability. Ensures double bookings
                    are avoided, optimizing the schedule for maximum efficiency.
                  </li>
                  <li>
                    <strong>Integrated Patient Management:</strong> Stores
                    patient information securely and allows easy access to
                    medical records. Facilitates smooth check-ins and maintains
                    a comprehensive patient history.
                  </li>
                  <li>
                    <strong>Advanced Analytics Integration:</strong> Integrates
                    event tracking, screens, and steps taken by visitors before
                    scheduling into Google Analytics. Helps practices gain
                    valuable insights into patient booking behavior to improve
                    service.
                  </li>
                  <li>
                    <strong>Seamless EHR Integration:</strong> Integrates with
                    popular electronic health record (EHR) systems such as
                    NexHealth, Open Dental, and DrChrono. Simplifies the
                    management of appointments, reducing the workload for
                    administrative staff.
                  </li>
                  <li>
                    <strong>HIPAA-Compliant Data Security:</strong> Built with
                    robust security measures to protect patient information.
                    Complies with HIPAA regulations, ensuring patient data
                    privacy and security.
                  </li>
                </ul>

                <h4>Benefits for Your Practice:</h4>
                <ul>
                  <li>
                    <strong>Enhanced Patient Experience:</strong> Patients enjoy
                    a hassle-free booking process with easy access to available
                    appointments. Reduces waiting times and improves overall
                    patient satisfaction.
                  </li>
                  <li>
                    <strong>Operational Efficiency:</strong> Frees up staff time
                    by automating administrative tasks, allowing them to focus
                    on patient care. Streamlines the workflow, reducing the need
                    for multiple systems and manual processes.
                  </li>
                  <li>
                    <strong>Scalability:</strong> Whether your practice has one
                    location or multiple, Apointoo scales with your needs.
                    Supports growth without compromising on performance or
                    efficiency.
                  </li>
                  <li>
                    <strong>Cost-Effective:</strong> Eliminates the need for
                    expensive custom software solutions. Provides a high return
                    on investment through improved operational efficiency and
                    patient satisfaction.
                  </li>
                </ul>

                <h4>Real-World Applications:</h4>
                <ul>
                  <li>
                    <strong>Small Practices:</strong> Ideal for small clinics
                    looking to improve their appointment scheduling without the
                    need for a complex system.
                  </li>
                  <li>
                    <strong>Large Healthcare Facilities:</strong> Supports
                    larger healthcare providers with multiple departments and
                    locations, ensuring all appointments are managed
                    efficiently.
                  </li>
                  <li>
                    <strong>Specialty Practices:</strong> Tailored to meet the
                    specific needs of specialty practices, from dental clinics
                    to physiotherapy centers, ensuring a customized scheduling
                    experience.
                  </li>
                </ul>
                <blockquote className="flaticon-quote">
                  <p>
                    Transform your practice’s scheduling challenges into
                    streamlined, efficient processes with Apointoo. Experience
                    the benefits of a robust appointment scheduling solution
                    designed to meet the unique needs of healthcare practices.
                  </p>
                </blockquote>
                <div className="car-service-list-wrap">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                      <div className="service-list-img">
                        <Image
                          src={servicesDetailsImg2}
                          alt="Image"
                          width={570}
                          height={400}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="car-service-list">
                        <ul>
                          <li>
                            <i className="bx bx-check"></i> Improved Efficiency
                          </li>
                          <li>
                            <i className="bx bx-check"></i> Enhanced Patient
                            Experience
                          </li>
                          <li>
                            <i className="bx bx-check"></i> Real-Time
                            Availability
                          </li>
                          <li>
                            <i className="bx bx-check"></i> Advanced Analytics
                            Integration
                          </li>
                          <li>
                            <i className="bx bx-check"></i> Less Administrative
                            Work
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <AskQuestionForm />
              </div>
            </div>
            {/*
            <div className="col-lg-4">
              <ServiceSidebar />
            </div>*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default DevDetailsContent;
