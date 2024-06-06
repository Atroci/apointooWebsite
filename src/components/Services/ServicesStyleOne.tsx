"use client";

import React from "react";
import Link from "next/link";

const ServicesStyleOne: React.FC = () => {
  return (
    <>
      <div className="features-area features-area-inner-style ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="single-features">
                <i className="flaticon-cloud-computing-1"></i>
                <h3>Appointment Scheduling Software</h3>
                <p>
                  Apointoo is the ideal appointment scheduling software for
                  practices seeking a straightforward, ready-to-use platform.
                </p>

                <Link
                  href="/solutions/appointment-scheduling-software/"
                  className="read-more-icon"
                >
                  <span className="flaticon-right-arrow"></span>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-features">
                <i className="flaticon-engineer"></i>
                <h3>Custom Software Development</h3>
                <p>
                  Our Personalized Services are perfect for practices that
                  require tailored integration and development.
                </p>

                <Link
                  href="/solutions/custom-software-development/"
                  className="read-more-icon"
                >
                  <span className="flaticon-right-arrow"></span>
                </Link>
              </div>
            </div>
            {/* Pagination */}
            <div className="col-lg-12">
              <div className="page-navigation-area">
                <nav aria-label="Page navigation example text-center">
                  <ul className="pagination">
                    {/*<li className="page-item">
                      <Link href="#" className="page-link page-links">
                        <i className="bx bx-chevrons-left"></i>
                      </Link>
                    </li>
                    
                    <li className="page-item active">
                      <Link href="#" className="page-link">
                        1
                      </Link>
                    </li>

                    <li className="page-item">
                      <Link href="#" className="page-link">
                        2
                      </Link>
                    </li>

                    <li className="page-item">
                      <Link href="#" className="page-link">
                        3
                      </Link>
                    </li>

                    <li className="page-item">
                      <Link href="#" className="page-link">
                        <i className="bx bx-chevrons-right"></i>
                      </Link>
                    </li>*/}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesStyleOne;
