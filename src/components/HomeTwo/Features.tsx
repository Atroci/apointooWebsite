"use client";

import React from "react";
import Link from "next/link";

const featuresData = [
  {
    iconName: "bx bx-calendar",
    title: "Appointment Scheduling Software",
    shortText:
      "Apointoo is the ideal appointment scheduling software for practices seeking a straightforward, ready-to-use platform.",
    viewDetails: "/solutions/appointment-scheduling-software/",
    aosDelay: "300",
  },
  {
    iconName: "bx bx-cog",
    title: "Custom Software Development",
    shortText:
      "Our Personalized Services are perfect for practices that require tailored integration and development.",
    viewDetails: "/solutions/custom-software-development/",
    aosDelay: "400",
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
