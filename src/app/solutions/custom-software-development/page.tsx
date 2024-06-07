import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import DevDetailsContent from "../../../components/ServiceDetails/DevDetailsContent";
import Footer from "../../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Custom Software Development"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Custom Software Development"
      />

      <DevDetailsContent />

      <Footer />
    </>
  );
}
