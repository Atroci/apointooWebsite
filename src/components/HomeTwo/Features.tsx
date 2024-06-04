"use client";

import React from "react";
import Link from "next/link";

const featuresData = [
  {
    iconName: "bx bx-shopping-bag",
    title: "Appointment Booking Software",
    shortText:
      "Effortlessly manage and book appointments with our user-friendly, automated scheduling software.",
    viewDetails: "/services/service-details/",
    aosDelay: "300",
  },
  {
    iconName: "flaticon-engineer",
    title: "Custom Integration Services",
    shortText:
      "Seamlessly integrate your existing systems with Appointo for streamlined scheduling and data synchronization.",
    viewDetails: "/services/service-details/",
    aosDelay: "600",
  },
  {
    iconName: "flaticon-success",
    title: "Custom Booking Solutions",
    shortText:
      "Tailor-made booking systems designed to meet your unique business needs and enhance patient experience.",
    viewDetails: "/services/service-details/",
    aosDelay: "900",
  },
];

const Features: React.FC = () => {
  return (
    <>
      <div className="features-area mt-minus-70 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            {featuresData &&
              featuresData.slice(0, 3).map((value, i) => (
                <div
                  className="col-lg-4 col-sm-6 p-0"
                  data-aos="fade-in"
                  data-aos-duration="800"
                  data-aos-delay={value.aosDelay}
                  key={i}
                >
                  <div className="single-features">
                    <i className={value.iconName}></i>
                    <h3>{value.title}</h3>
                    <p>{value.shortText}</p>

                    <Link href={value.viewDetails} className="read-more-icon">
                      <span className="flaticon-right-arrow"></span>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
