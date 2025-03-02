import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import NewsGridCard from "../../components/News/NewsGridCard";
import Footer from "../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Blog"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog"
      />

      <NewsGridCard />

      <Footer />
    </>
  );
}
