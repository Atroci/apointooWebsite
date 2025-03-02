"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import shapeImg1 from "../../../public/images/shape/services-shape/1.png";
import shapeImg2 from "../../../public/images/shape/services-shape/2.png";
import shapeImg3 from "../../../public/images/shape/services-shape/3.png";
import shapeImg4 from "../../../public/images/shape/services-shape/4.png";
import shapeImg5 from "../../../public/images/shape/services-shape/5.png";
import shapeImg6 from "../../../public/images/shape/services-shape/6.png";

const ServicesStyleThree: React.FC = () => {
  return (
    <>
      <div className="offer-area gray-bg ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="service-card">
                <i className="flaticon-chip"></i>
                <h3>
                  <Link href="/services/service-details/">
                    Robotics & Drones
                  </Link>
                </h3>
                <p>
                  Lorem consectetur ipsum dolor sit amet, adipiscing elit, do
                  eiusmod tempor incididunt sed.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card">
                <i className="flaticon-vr"></i>
                <h3>
                  <Link href="/services/service-details/">
                    Virtually Reality
                  </Link>
                </h3>
                <p>
                  Lorem consectetur ipsum dolor sit amet, adipiscing elit, do
                  eiusmod tempor incididunt sed.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card">
                <i className="flaticon-blockchain"></i>
                <h3>
                  <Link href="/services/service-details/">
                    Blockchain Project
                  </Link>
                </h3>
                <p>
                  Lorem consectetur ipsum dolor sit amet, adipiscing elit, do
                  eiusmod tempor incididunt sed.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card">
                <i className="flaticon-target"></i>
                <h3>
                  <Link href="/services/service-details/">
                    Image Processing
                  </Link>
                </h3>
                <p>
                  Lorem consectetur ipsum dolor sit amet, adipiscing elit, do
                  eiusmod tempor incididunt sed.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card">
                <i className="flaticon-choice"></i>
                <h3>
                  <Link href="/services/service-details/">
                    Order Management
                  </Link>
                </h3>
                <p>
                  Lorem consectetur ipsum dolor sit amet, adipiscing elit, do
                  eiusmod tempor incididunt sed.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card">
                <i className="flaticon-deep-learning"></i>
                <h3>
                  <Link href="/services/service-details/">
                    Machine Learning
                  </Link>
                </h3>
                <p>
                  Lorem consectetur ipsum dolor sit amet, adipiscing elit, do
                  eiusmod tempor incididunt sed.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card">
                <i className="flaticon-cloud-computing-1"></i>
                <h3>
                  <Link href="/services/service-details/">Data Science</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Mollitia, maxime ipsum praesentium culpa expedita.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card">
                <i className="flaticon-engineer"></i>
                <h3>
                  <Link href="/services/service-details/">Data Engineer</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Mollitia, maxime ipsum praesentium culpa expedita.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card">
                <i className="flaticon-success"></i>
                <h3>
                  <Link href="/services/service-details/">
                    Facing AI Challenges
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Mollitia, maxime ipsum praesentium culpa expedita.
                </p>
              </div>
            </div>

            {/* Pagination */}
            <div className="col-lg-12">
              <div className="page-navigation-area">
                <nav aria-label="Page navigation example text-center">
                  <ul className="pagination">
                    <li className="page-item">
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
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="offer-shape">
          <Image src={shapeImg1} alt="Image" width={300} height={375} />
          <Image src={shapeImg2} alt="Image" width={300} height={375} />
          <Image src={shapeImg3} alt="Image" width={41} height={36} />
          <Image src={shapeImg4} alt="Image" width={20} height={20} />
          <Image src={shapeImg5} alt="Image" width={28} height={30} />
          <Image src={shapeImg6} alt="Image" width={25} height={25} />
        </div>
      </div>
    </>
  );
};

export default ServicesStyleThree;
