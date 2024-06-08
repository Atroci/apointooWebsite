"use client";

import React from "react";
import NewsSidebar from "./NewsSidebar";
import CommentsArea from "./CommentsArea";
import PostNavigation from "./../../components/Common/PostNavigation";

const NewsDetailsContent: React.FC = () => {
  return (
    <div className="news-details-area ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="blog-details-desc">
              <div className="article-footer">
                <div className="article-tags">
                  <span>
                    <i className="bx bx-share-alt"></i>
                  </span>
                  <a href="#">Share</a>
                </div>

                <div className="article-share">
                  <ul className="social">
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com/" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.pinterest.com/" target="_blank">
                        <i className="bx bxl-pinterest-alt"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Comments Area
              <CommentsArea /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsContent;
