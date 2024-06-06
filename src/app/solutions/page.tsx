import React from "react";
import Navbar from "./../../components/Layouts/Navbar";
import PageBanner from "./../../components/Common/PageBanner";
import ServicesStyleOne from "./../../components/Services/ServicesStyleOne";

import ServicesStyleFour from "./../../components/Services/ServicesStyleFour";
import MakeYourBusiness from "./../../components/Common/MakeYourBusiness";
import Footer from "./../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Solutions"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Solutions"
      />
      <ServicesStyleOne />

      <ServicesStyleFour />

      {/*  <MakeYourBusiness />
       */}
      <Footer />
    </>
  );
}
