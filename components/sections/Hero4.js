
import Link from 'next/link'
import VideoPopup from '../elements/VideoPopup'

export default function Hero4() {
    return (
        <>
            <section className="hero-section hero-4 bg-cover" style={{ backgroundImage: 'url("assets/img/section-bg.jpg")' }}>
                <div className="container">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-6">
                            <div className="hero-content">
                                <h6 className="wow fadeInUp">patient scheduling software</h6>
                                <h1 className="wow fadeInUp" data-wow-delay=".3s">Integrate Patient Scheduling with Your EHR</h1>
                                <p className="wow fadeInUp" data-wow-delay=".5s">
Apointoo is an advanced patient scheduling software designed to streamline the process of managing appointments in healthcare settings.                                </p>
                                <div className="hero-button">
                                    <Link href="https://demo.apointoo.com/" className="theme-btn wow fadeInUp" data-wow-delay=".7s">
                                        Explore our Demo
                                        <i className="fa-solid fa-arrow-right-long" />
                                    </Link>
                                  {/*  <VideoPopup style={3}/>*/}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                            <div className="hero-image">
                                <img src="/assets/img/hero/hero-4.png" alt="hero-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
