// src/app/blog/[uid]/page.tsx
import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import Navbar from "@/components/Layouts/Navbar"; // Using alias
import PageBanner from "@/components/Common/PageBanner"; // Using alias
import NewsDetailsContent from "@/components/News/NewsDetailsContent"; // Using alias
import Footer from "@/components/Layouts/Footer"; // Using alias

import { createClient } from "@/prismicio";
import { components } from "@/slices"; // Using alias
import { Post } from "@/libs/types/post"; // Using alias

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  let page: Post | undefined, allPosts: Post[] | undefined;

  try {
    page = await client.getByUID("blogpost", params.uid);
    allPosts = await client.getAllByType("blogpost", {
      orderings: [{ field: "my.blogpost.date", direction: "desc" }],
    });
  } catch (error) {
    return notFound();
  }

  if (!page) {
    return notFound();
  }

  const currentIndex = allPosts.findIndex((post) => post.id === page.id);
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const prevPost =
    currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle={page.data.meta_title || "Blog Article"}
        homePageUrl="/"
        homePageText="Home"
        activePageText={page.data.meta_title || "Blog Article"}
      />
      <SliceZone slices={page.data.slices} components={components} />
      <NewsDetailsContent
        currentPost={page}
        nextPost={nextPost}
        prevPost={prevPost}
      />
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
  let page: Post | undefined;

  try {
    page = await client.getByUID("blogpost", params.uid);
  } catch (error) {
    return {
      title: "Not Found",
      description: "This page could not be found.",
    };
  }

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
