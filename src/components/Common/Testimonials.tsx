"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const testimonialsData = [
  {
    image: "/images/clients/client1.jpg",
    name: "Dr. Maria Santos",
    designation: "Dentist",
    feedbackText:
      "Appointo has completely transformed the way we manage our appointments. The seamless integration with Open Dental has made our processes so much more efficient.",
    rating: [
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
    ],
  },
  {
    image: "/images/clients/client2.jpg",
    name: "Dr. James Wilson",
    designation: "Orthodontist",
    feedbackText:
      "The ease of use and the support provided by Appointo is outstanding. Our staff adapted to it quickly and our appointment booking has never been smoother.",
    rating: [
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
    ],
  },
  {
    image: "/images/clients/client3.jpg",
    name: "Dr. Linda Green",
    designation: "Pediatrician",
    feedbackText:
      "Appointo has made scheduling so easy for both our patients and staff. The customizable booking interface is a game-changer for us.",
    rating: [
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
    ],
  },
  {
    image: "/images/clients/client4.jpg",
    name: "Dr. Michael Lee",
    designation: "Family Physician",
    feedbackText:
      "With Appointo, our appointment management is more efficient and the advanced analytics provide us with valuable insights to improve our practice.",
    rating: [
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
    ],
  },
];

const Testimonials: React.FC = () => {
  return (
    <>
      <div className="client-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Testimonials</span>
            <h2>What Clients Say About Us</h2>
          </div>

          <Swiper
            autoHeight={true}
            spaceBetween={25}
            navigation={true}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
            modules={[Navigation, Autoplay]}
            className="testimonials-slide"
          >
            {testimonialsData &&
              testimonialsData.slice(0, 10).map((value, i) => (
                <SwiperSlide key={i}>
                  <div className="single-client">
                    <i className="quotes flaticon-left-quotes-sign"></i>
                    <p>{value.feedbackText}</p>

                    <ul>
                      {value.rating.map((value, i) => (
                        <li key={i}>
                          <i className={value.iconName}></i>
                        </li>
                      ))}
                    </ul>

                    <div className="client-img">
                      <Image
                        src={value.image}
                        alt="Image"
                        width={70}
                        height={70}
                      />
                      <h3>{value.name}</h3>
                      <span>{value.designation}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
