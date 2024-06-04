import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import About from "../../components/AboutOne/About";
import MakeYourBusiness from "../../components/Common/MakeYourBusiness";
import Testimonials from "../../components/Common/Testimonials";
import TeamTwo from "../../components/Common/TeamTwo";
import Partner from "../../components/Common/Partner";
import Footer from "../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="About Apointoo"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About Apointoo"
      />

      <About />

      <MakeYourBusiness />

      <Testimonials />
      {/*
      <TeamTwo />

      <div className="pb-10">
        <Partner />
      </div>*/}

      <Footer />
    </>
  );
}
