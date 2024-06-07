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

                <h3>Custom Software Development</h3>
                <p>
                  Our custom software development services are designed to meet
                  the unique needs of your practice. Whether you require
                  tailored integrations, specialized applications, or enhanced
                  features, our team of experts is equipped to deliver solutions
                  that align perfectly with your requirements.
                </p>
                <h4>Key Features:</h4>
                <ul>
                  <li>
                    <strong>Tailored Solutions:</strong> Custom software
                    designed to fit your specific practice requirements,
                    ensuring maximum efficiency and productivity.
                  </li>
                  <li>
                    <strong>Seamless Integration:</strong> Integrates seamlessly
                    with your existing systems, reducing the need for multiple
                    platforms and streamlining your workflow.
                  </li>
                  <li>
                    <strong>Enhanced Features:</strong> Development of unique
                    features that are not available in off-the-shelf software,
                    providing you with a competitive edge.
                  </li>
                  <li>
                    <strong>Scalable and Flexible:</strong> As your practice
                    grows, custom software can be scaled and adapted to meet
                    your evolving needs.
                  </li>
                  <li>
                    <strong>Dedicated Support:</strong> Our development team
                    provides ongoing support and maintenance to ensure your
                    software remains up-to-date and performs optimally.
                  </li>
                </ul>

                <h4>Benefits for Your Practice:</h4>
                <ul>
                  <li>
                    <strong>Improved Efficiency:</strong> Streamline your
                    operations with software solutions tailored to your specific
                    workflows and processes.
                  </li>
                  <li>
                    <strong>Operational Efficiency:</strong> Frees up staff time
                    by automating administrative tasks, allowing them to focus
                    on patient care. Streamlines the workflow, reducing the need
                    for multiple systems and manual processes.
                  </li>
                  <li>
                    <strong>Scalability:</strong> Whether your practice has one
                    location or multiple, our custom solutions scale with your
                    needs. Supports growth without compromising on performance
                    or efficiency.
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
                    looking to improve their operations with custom software
                    tailored to their needs.
                  </li>
                  <li>
                    <strong>Large Healthcare Facilities:</strong> Supports
                    larger healthcare providers with multiple departments and
                    locations, ensuring all operations are managed efficiently.
                  </li>
                  <li>
                    <strong>Specialty Practices:</strong> Tailored to meet the
                    specific needs of specialty practices, from dental clinics
                    to physiotherapy centers, ensuring a customized experience.
                  </li>
                </ul>

                <p>
                  Transform your practice’s challenges into streamlined,
                  efficient processes with our custom software development
                  solutions. Experience the benefits of software designed to
                  meet the unique needs of healthcare practices.
                </p>

                <div className="service-list-wrap">
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

                    <div className="col-lg-4 col-md-6">
                      <div className="car-service-list">
                        <ul>
                          <li>
                            <i className="bx bx-check"></i>
                            Improved Efficiency
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            Enhanced Patient Experience
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            Real-Time Availability
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            Advanced Analytics Integration
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            Less Administrative Work
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
