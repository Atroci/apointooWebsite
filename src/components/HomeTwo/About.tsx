"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import aboutImg from "../../../public/images/about-img.png";

const About: React.FC = () => {
  return (
    <>
      <div className="about-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="about-img"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="600"
              >
                <Image src={aboutImg} alt="Image" width={490} height={420} />
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="about-content"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="900"
              >
                <span>Appointment Booking Software</span>
                <h2>
                  Effortlessly Manage Your Appointments with Advanced Features
                </h2>
                <p>
                  Streamline your scheduling process with our intuitive and
                  automated booking software, designed to meet the unique needs
                  of your practice.
                </p>

                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="flaticon-checked"></i>
                        Seamless Integration
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        Availability Management
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        Fast setup
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="flaticon-checked"></i>
                        No Learning Curve
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        Customizable Scheduling
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        Secure and Compliant
                      </li>
                    </ul>
                  </div>
                </div>

                <Link href="/about" className="default-btn">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
