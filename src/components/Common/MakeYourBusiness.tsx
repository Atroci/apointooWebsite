"use client";

import React from "react";
import Link from "next/link";

const MakeYourBusiness: React.FC = () => {
  return (
    <>
      <div className="business-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="business-content">
                <h2>What is Appointo?</h2>
              </div>

              <div className="single-business">
                <i className="flaticon-chip"></i>
                <h3>Your All-in-One Appointment Scheduling Solution</h3>
                <p>
                  Appointo is a comprehensive software solution designed for
                  healthcare practices of all sizes. Our platform simplifies the
                  appointment booking process for patients, provides valuable
                  insights for marketing teams, and integrates seamlessly with
                  your existing systems to manage analytics and booking
                  information efficiently.
                </p>
              </div>

              <div className="business-btn">
                <Link href="/about-2" className="default-btn">
                  Learn More
                </Link>
              </div>
            </div>

            {/* <div className="col-lg-6">
              <div className="row">
                <div
                  className="col-lg-6 col-sm-6 counter-nth"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="100"
                >
                  <div className="single-counter">
                    <h2>
                      <span className="target">95%</span>
                    </h2>
                    <p>Project Completed</p>
                  </div>
                </div>

                <div
                  className="col-lg-6 col-sm-6 counter-nth"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  <div className="single-counter">
                    <h2>
                      <span className="target">90%</span>
                    </h2>
                    <p>Design</p>
                  </div>
                </div>

                <div
                  className="col-lg-6 col-sm-6 counter-nth"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="300"
                >
                  <div className="single-counter">
                    <h2>
                      <span className="target">85%</span>
                    </h2>
                    <p>Happy Clients</p>
                  </div>
                </div>

                <div
                  className="col-lg-6 col-sm-6 counter-nth"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="400"
                >
                  <div className="single-counter">
                    <h2>
                      <span className="target">80</span>
                    </h2>
                    <p>Award Win</p>
                  </div>
                </div>
              </div>
            </div>*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default MakeYourBusiness;
