import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import NewsDetailsContent from "../../../components/News/NewsDetailsContent";
import Footer from "../../../components/Layouts/Footer";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("blogpost", params.uid)
    .catch(() => notFound());

  if (!page) {
    return notFound();
  }

  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle={page.data.title || "Blog Details"}
        homePageUrl="/"
        homePageText="Home"
        activePageText={page.data.title || "Blog Details"}
      />

      <NewsDetailsContent>
        <SliceZone slices={page.data.slices} components={components} />
      </NewsDetailsContent>

      <Footer />
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("blogpost", params.uid)
    .catch(() => notFound());

  if (!page) {
    return {
      title: "Not Found",
      description: "This page could not be found.",
    };
  }

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("blogpost");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
