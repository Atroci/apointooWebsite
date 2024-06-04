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

const servicesData = [
  {
    iconName: "flaticon-chip",
    title: "Seamless EHR Integration",
    shortText:
      "Effortlessly integrate with your existing EHR system to streamline your practice's scheduling and management.",
    viewDetails: "/services/service-details/",
    aosDelay: "400",
  },
  {
    iconName: "flaticon-vr",
    title: "Customizable Booking Interface",
    shortText:
      "Use the interface of your choice for a personalized and comfortable user experience.",
    viewDetails: "/services/service-details/",
    aosDelay: "500",
  },
  {
    iconName: "flaticon-blockchain",
    title: "Advanced Analytics",
    shortText:
      "Gain valuable insights with advanced analytics to improve efficiency and patient care.",
    viewDetails: "/services/service-details/",
    aosDelay: "600",
  },
  {
    iconName: "flaticon-target",
    title: "Automated Data Management",
    shortText:
      "Automate the management of patient data, ensuring accuracy and reducing manual workload.",
    viewDetails: "/services/service-details/",
    aosDelay: "700",
  },
  {
    iconName: "flaticon-choice",
    title: "Dedicated Support and Continuous Enhancements",
    shortText:
      "Benefit from our 24/7 support and regular performance enhancements to keep your system running smoothly.",
    viewDetails: "/services/service-details/",
    aosDelay: "800",
  },
  {
    iconName: "flaticon-deep-learning",
    title: "Enhanced Security and Compliance",
    shortText:
      "Protect patient data with secure, encrypted communications, ensuring compliance with HIPAA and other regulations.",
    viewDetails: "/services/service-details/",
    aosDelay: "900",
  },
];

const Services: React.FC = () => {
  return (
    <>
      <div className="offer-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span></span>
            <h2>Why Apointoo?</h2>
            <p>
              Apointoo is the premier solution for automating your practice
              scheduling, designed to seamlessly integrate with your EHR and
              cater to the unique needs of your healthcare practice.
            </p>
          </div>

          <div className="row justify-content-center">
            {servicesData &&
              servicesData.slice(0, 6).map((value, i) => (
                <div
                  className="col-lg-4 col-sm-6"
                  key={i}
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay={value.aosDelay}
                >
                  <div className="single-offer rounded-4">
                    <i className={value.iconName}></i>
                    <h3>
                      <Link href={value.viewDetails}>{value.title}</Link>
                    </h3>
                    <p>{value.shortText}</p>
                  </div>
                </div>
              ))}
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

export default Services;
