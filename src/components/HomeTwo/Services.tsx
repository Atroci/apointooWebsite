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
    title: "Customizable Booking Pages:",
    shortText:
      "Offer your patients an easy and personalized way to book appointments that match your website’s look and feel. Existing patients can book appointments faster and with fewer steps, enhancing their overall experience.",
    viewDetails: "/services/service-details/",
    aosDelay: "400",
  },
  {
    iconName: "flaticon-vr",
    title: "Advanced Analytics Integration",
    shortText:
      "Track and understand your patients' booking journey by sending key booking event information to tools like Google Analytics. Gain valuable insights to improve your marketing efforts and enhance patient experience.",
    viewDetails: "/services/service-details/",
    aosDelay: "500",
  },
  {
    iconName: "flaticon-blockchain",
    title: "EHR Integrations",
    shortText:
      "Manage all your bookings within your existing electronic health record systems like NexHealth, Open Dental, and DrChrono. Our seamless integration reduces the need for additional steps or tools, making your workflow more efficient.",
    viewDetails: "/services/service-details/",
    aosDelay: "600",
  },
  {
    iconName: "flaticon-target",
    title: "Data Security",
    shortText:
      "Your patients' data security is our top priority. Our system is built to not store any patient information, ensuring compliance and peace of mind. If needed, patient information storage can be requested as a management service with dedicated HIPAA-compliant servers.",
    viewDetails: "/services/service-details/",
    aosDelay: "700",
  },
  {
    iconName: "flaticon-choice",
    title: "Scalable Solution",
    shortText:
      "As your practice expands, Appointoo seamlessly handles increased appointment volumes and additional locations without compromising performance or efficiency.",
    viewDetails: "/services/service-details/",
    aosDelay: "800",
  },
  {
    iconName: "flaticon-deep-learning",
    title: "Quick Implementation",
    shortText:
      "Our platform is easy to set up, with minimal disruption to your practice’s daily operations. Our dedicated support team is here to assist you every step of the way, ensuring a smooth transition and fast deployment.",
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
            <h2>Why Choose Apointo?</h2>
            <p></p>
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
