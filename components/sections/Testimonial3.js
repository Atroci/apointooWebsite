
'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    speed: 1500,
    loop: true,
    spaceBetween: 30,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".array-prev",
        prevEl: ".array-next",
    },
    breakpoints: {
        991: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 1,
        },

        575: {
            slidesPerView: 1,
        },

        0: {
            slidesPerView: 1,
        },
    },
}

export default function Testimonial3() {
    return (
        <>
            <section className="tesimonial-section-3 section-padding section-bg-2 bg-cover">
                <div className="line-shape">
                    <img src="/assets/img/team/line-shape.png" alt="shape-img" />
                </div>
                <div className="mask-shape">
                    <img src="/assets/img/team/mask-shape.png" alt="shape-img" />
                </div>
                <div className="array-button">
                    <button className="array-prev"><i className="fal fa-arrow-left" /></button>
                    <button className="array-next"><i className="fal fa-arrow-right" /></button>
                </div>
                <div className="container">
                    <div className="section-title text-center">
                        <span className="text-white">Testimonials</span>
                        <h2 className="text-white">
                        Doctors Who Trust Us
                        </h2>
                    </div>
                    <div className="swiper testimonial-slider-2">
                        <Swiper {...swiperOptions} className="swiper-wrapper">
                            <SwiperSlide>
                                <div className="testimonial-box-items">
                                    <div className="icon">
                                        <img src="/assets/img/testimonial/icon.png" alt="icon-img" />
                                    </div>
                                    <div className="client-items">
                                        <div className="client-image style-2 bg-cover" style={{ backgroundImage: 'url("assets/img/testimonial/02.jpg")' }} />
                                        <div className="client-content">
                                            <h4>Dr. Kai Valle</h4>
                                            <p>Doctor</p>
                                            <div className="star">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                        </div>
                                    </div>
                                    <p>
                                        "Since switching to Apointoo, scheduling has become efficient. The EHR integration is flawless, and the support team is always there when needed. It’s a huge help in managing my busy schedule."
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-box-items">
                                    <div className="icon">
                                        <img src="/assets/img/testimonial/icon.png" alt="icon-img" />
                                    </div>
                                    <div className="client-items">
                                        <div className="client-image style-2 bg-cover" style={{ backgroundImage: 'url("assets/img/testimonial/03.jpg")' }} />
                                        <div className="client-content">
                                            <h4>Dr. Frank Antrikin</h4>
                                            <p>Doctor</p>
                                            <div className="star">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star color-text" />
                                            </div>
                                        </div>
                                    </div>
                                    <p>
                                        "Apointoo makes managing appointments a breeze. The customizable booking interface is user-friendly, and the advanced analytics provide useful insights. It's improved our workflow and patient satisfaction."
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-box-items">
                                    <div className="icon">
                                        <img src="/assets/img/testimonial/icon.png" alt="icon-img" />
                                    </div>
                                    <div className="client-items">
                                        <div className="client-image style-2 bg-cover" style={{ backgroundImage: 'url("assets/img/testimonial/02.jpg")' }} />
                                        <div className="client-content">
                                            <h4>Dr. Steve Luskey</h4>
                                            <p>Doctor</p>
                                            <div className="star">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                        </div>
                                    </div>
                                    <p>
                                        "With Apointoo, our practice runs smoother. The seamless EHR integration and automated data management save us time. The security features ensure patient data is protected."
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-box-items">
                                    <div className="icon">
                                        <img src="/assets/img/testimonial/icon.png" alt="icon-img" />
                                    </div>
                                    <div className="client-items">
                                        <div className="client-image style-2 bg-cover" style={{ backgroundImage: 'url("assets/img/testimonial/03.jpg")' }} />
                                        <div className="client-content">
                                            <h4>Dr. Ethel Hendren</h4>
                                            <p>Doctor</p>
                                            <div className="star">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star color-text" />
                                            </div>
                                        </div>
                                    </div>
                                    <p>
                                        "Apointoo makes managing appointments a breeze. The customizable booking interface is user-friendly, and the advanced analytics provide useful insights. It's improved our workflow and patient satisfaction."
                                    </p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}
