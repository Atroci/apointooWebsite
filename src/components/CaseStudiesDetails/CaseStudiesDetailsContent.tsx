"use client";

import React from "react";
import Image from "next/image";

import detailsImg from "../../../public/images/services-details/services-details.jpg";
import detailsImg2 from "../../../public/images/services-details/services-details2.png";

const CaseStudiesDetailsContent: React.FC = () => {
  return (
    <>
      <div className="service-details-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="service-details-wrap">
                <div className="service-img">
                  <Image
                    src={detailsImg}
                    alt="Image"
                    width={900}
                    height={500}
                  />
                </div>

                <h3>Service Of Warehousing</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  veritatis ducimus rerum sunt dignissimos libero et eum modi!
                  Consequuntur rem incidunt et ducimus magnam sunt rerum hic
                  beatae sed obcaecati. Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Laudantium asperiores eos obcaecati nostrum
                  sed, corporis placeat quasi pariatur id, est iure, minus
                  quibusdam! Facilis.
                </p>

                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classNameical Latin
                  literature from 45 BC, making it over 2000 years old. Richard
                  McClintock, a Latin professor at Hampden-Sydney College in
                  Virginia, looked up one of the more obscure Latin words.
                </p>

                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don&apos;t
                  look even slightly believable. If you are going to use a
                  passage of Lorem, you to be sure there isn&apos;t anything.
                </p>

                <div className="car-service-list-wrap">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                      <div className="service-list-img">
                        <Image
                          src={detailsImg2}
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
                            <i className="bx bx-check"></i>
                            Engine bay cleaned and dressed
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            Door card panels cleaned
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            Plastic trim enhanced
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            Paint surface clay barred
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            Alloy wheel treatment inside and out
                          </li>
                        </ul>
                      </div>
                    </div>
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

export default CaseStudiesDetailsContent;
