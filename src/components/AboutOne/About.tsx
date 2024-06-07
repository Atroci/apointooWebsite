"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import aboutImg from "../../../public/images/about-img.png";

const About: React.FC = () => {
  return (
    <>
      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                <Image src={aboutImg} alt="Image" width={490} height={420} />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <span>About Us</span>
                <h2>
                  Effortlessly Manage Your Appointments with Advanced Features:
                </h2>
                <p>
                  At Appointo, we are committed to transforming the way
                  healthcare practices manage their appointments. Our mission is
                  to provide a seamless, user-friendly, and efficient scheduling
                  solution that integrates effortlessly with Open Dental,
                  enhancing your practice’s ability to manage and increase
                  appointments.
                </p>
                <p>
                  We are a dedicated team of Brazilian developers based in
                  Lisbon, Portugal, with over five years of experience working
                  with healthcare clients in the USA, Portugal, and Brazil. Our
                  expertise spans various facets of digital marketing, allowing
                  us to understand and meet the unique needs of healthcare
                  practices.
                </p>
                <p>
                  Our goal is to make Appointo a go-to solution for in-house or
                  outsourced marketing teams, as well as small business owners
                  who lack the time to research new booking solutions, train
                  staff, or deal with implementation downtime. We strive to
                  deliver solutions that require no effort from the office side,
                  while increasing conversions and satisfaction in the booking
                  process.
                </p>

                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="flaticon-checked"></i>
                        Seamless EHR Integration
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        Customizable Booking Interface
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        Advanced Analytics
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="flaticon-checked"></i>
                        Automated Data Management
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        24/7 Dedicated Support
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        Enhanced Security and Compliance
                      </li>
                    </ul>
                  </div>
                </div>
                {/*
                <Link href="/about" className="default-btn">
                  Learn More
                </Link>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
