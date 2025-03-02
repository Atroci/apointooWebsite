import React from "react";
import Navbar from "./../components/Layouts/Navbar";
import MainBanner from "./../components/HomeTwo/MainBanner";
import Features from "./../components/HomeTwo/Features";
import About from "./../components/HomeTwo/About";
import Services from "./../components/HomeTwo/Services";
import Pricing from "./../components/HomeTwo/Pricing";
import Newsletter from "./../components/Common/Newsletter";
import MakeYourBusiness from "./../components/Common/MakeYourBusiness";
import Testimonials from "./../components/Common/Testimonials";
import WhatWeOffer from "./../components/HomeTwo/WhatWeOffer";
import News from "./../components/Common/News";
import Partner from "./../components/Common/Partner";
import Footer from "./../components/Layouts/Footer";
import Faq from "./../components/HomeFour/Faq";

export default function Page() {
  return (
    <>
      <Navbar />

      <MainBanner />

      <Features />

      <About />

      <Services />

      <Newsletter />
      <Faq />

      {/*
            <News />

            <WhatWeOffer />

            <MakeYourBusiness />

      --------------------------
      <Pricing />
      <Testimonials />

      
      
      <div className="pb-50">
        <Partner />
      </div>

      */}

      <Footer />
    </>
  );
}
