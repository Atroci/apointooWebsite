import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import ApointooDetailsContent from "../../../components/ServiceDetails/ApointooDetailsContent";
import Footer from "../../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Appointment Schedule Software"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Appointment Schedule Software"
      />

      <ApointooDetailsContent />

      <Footer />
    </>
  );
}
