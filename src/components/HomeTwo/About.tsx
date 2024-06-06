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
                <span>What is Apointo?</span>
                <h2>Your All-in-One Appointment Scheduling Solution</h2>
                <p>
                  Appointo is a comprehensive software solution designed for
                  healthcare practices of all sizes. Our platform simplifies the
                  appointment booking process for patients, provides valuable
                  insights for marketing teams, and integrates seamlessly with
                  your existing systems to manage analytics and booking
                  information efficiently.
                </p>

                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="flaticon-checked"></i>
                        Customizable Booking Pages
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        Advanced Analytics Integration
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        EHR Integration
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="flaticon-checked"></i>
                        Data Security
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        Scalable Solution
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        Quick Implementation
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
