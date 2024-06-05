import React from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Link from "next/link";

/**
 * Props for `InfoSection`.
 */
export type InfoSectionProps = SliceComponentProps<Content.InfoSectionSlice>;

/**
 * Component for "InfoSection" Slices.
 */
const InfoSection = ({ slice }: InfoSectionProps): JSX.Element => {
  const { primary } = slice;
  const postedDate = primary?.published_date
    ? new Date(primary.published_date)
    : null;
  const postedBy = primary?.posted_by ?? "Unknown";

  return (
    <div className="news-details-area pb-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="blog-details-desc">
              <div className="article-content">
                <div className="entry-meta">
                  <ul>
                    <li>
                      <span>Posted On:</span>{" "}
                      {postedDate
                        ? postedDate.toLocaleDateString()
                        : "Date not available"}
                    </li>
                    <li>
                      <span>Posted By:</span>
                      <Link href="#">{postedBy}</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
