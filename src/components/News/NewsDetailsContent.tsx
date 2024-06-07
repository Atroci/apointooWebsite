// src/components/News/NewsDetailsContent.tsx
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import NewsSidebar from "@/components/News/NewsSidebar"; // Using alias
import CommentsArea from "@/components/News/CommentsArea"; // Using alias
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices"; // Using alias
import { Post } from "@/libs/types/post"; // Using alias

type NewsDetailsContentProps = {
  currentPost: Post;
  nextPost: Post | null;
  prevPost: Post | null;
};

const NewsDetailsContent: React.FC<NewsDetailsContentProps> = ({
  currentPost,
  nextPost,
  prevPost,
}) => {
  return (
    <>
      <div className="news-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details-desc">
                <div className="article-image">
                  {currentPost.data.image && (
                    <Image
                      src={currentPost.data.image.url}
                      alt={currentPost.data.image.alt}
                      width={800} // Set appropriate width
                      height={600} // Set appropriate height
                      layout="responsive" // Use responsive layout
                    />
                  )}
                </div>

                <div className="article-content">
                  <h1>{currentPost.data.meta_title}</h1>
                  <SliceZone
                    slices={currentPost.data.slices}
                    components={components}
                  />
                </div>

                <div className="article-footer">
                  <div className="article-tags">
                    <span>
                      <i className="bx bx-share-alt"></i>
                    </span>
                    <Link href="#">Share</Link>
                  </div>

                  <div className="article-share">
                    <ul className="social">
                      <li>
                        <a
                          href="https://www.facebook.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="bx bxl-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.twitter.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="bx bxl-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="bx bxl-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.pinterest.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="bx bxl-pinterest-alt"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="post-navigation">
                  <div className="navigation-links">
                    {prevPost && (
                      <div className="nav-previous">
                        <Link href={`/blog/${prevPost.uid}`}>
                          <a>
                            <i className="bx bx-left-arrow-alt"></i> Prev Post
                          </a>
                        </Link>
                      </div>
                    )}
                    {nextPost && (
                      <div className="nav-next">
                        <Link href={`/blog/${nextPost.uid}`}>
                          <a>
                            Next Post <i className="bx bx-right-arrow-alt"></i>
                          </a>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>

                <CommentsArea />
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <NewsSidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsDetailsContent;
