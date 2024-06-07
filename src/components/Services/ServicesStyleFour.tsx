"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import offerImg from "../../../public/images/offer1.png";

const ServicesStyleFour: React.FC = () => {
  return (
    <>
      <div className="industries-serve-area pt-100 pb-0">
        <div className="container">
          <div className="section-title">
            <span></span>
            <h2>Industries We Serve</h2>
            <p>
              Appointoo is designed to cater to a wide range of industries,
              ensuring seamless appointment scheduling and efficient practice
              management. Our solutions are tailored to meet the unique needs of
              each industry, providing customizable, scalable, and secure
              services.
            </p>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="row">
                <div className="col-lg-12 col-md-6">
                  <div className="single-industries">
                    <i className="flaticon-machine-learning"></i>
                    <h3>Healthcare Practices</h3>
                    <span>All types of services</span>

                    <Link href="#" className="right-icon">
                      <span className="bx bx-chevrons-right"></span>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12 col-md-6">
                  <div className="single-industries">
                    <i className="flaticon-artificial-intelligence"></i>
                    <h3>Chiropractic Offices</h3>
                    <span>All types of services</span>

                    <Link href="#" className="right-icon">
                      <span className="bx bx-chevrons-right"></span>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12 col-md-6">
                  <div className="single-industries">
                    <i className="flaticon-health"></i>
                    <h3>Fitness and Personal Training</h3>
                    <span>All types of services</span>

                    <Link href="#" className="right-icon">
                      <span className="bx bx-chevrons-right"></span>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12 col-md-6">
                  <div className="single-industries">
                    <i className="flaticon-automation"></i>
                    <h3>Wellness and Spa Centers</h3>
                    <span>All types of services</span>

                    <Link href="#" className="right-icon">
                      <span className="bx bx-chevrons-right"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="industries-img">
                <Image src={offerImg} alt="Image" width={370} height={390} />
              </div>
            </div>

            <div className="col-lg-4">
              <div className="row">
                <div className="col-lg-12 col-md-6">
                  <div className="single-industries right-item">
                    <i className="flaticon-choice"></i>
                    <h3>Dental Clinics</h3>
                    <span>All types of services</span>

                    <Link href="#" className="right-icon">
                      <span className="bx bx-chevrons-right"></span>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12 col-md-6">
                  <div className="single-industries right-item">
                    <i className="flaticon-deep-learning"></i>
                    <h3>Veterinary Clinics</h3>
                    <span>All types of services</span>

                    <Link href="#" className="right-icon">
                      <span className="bx bx-chevrons-right"></span>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12 col-md-6">
                  <div className="single-industries right-item">
                    <i className="flaticon-cyber-security"></i>
                    <h3>Physical Therapy Centers</h3>
                    <span>All types of services</span>

                    <Link href="#" className="right-icon">
                      <span className="bx bx-chevrons-right"></span>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12 col-md-6">
                  <div className="single-industries right-item">
                    <i className="flaticon-blockchain"></i>
                    <h3>Mental Health Services</h3>
                    <span>All types of services</span>

                    <Link href="#" className="right-icon">
                      <span className="bx bx-chevrons-right"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesStyleFour;
