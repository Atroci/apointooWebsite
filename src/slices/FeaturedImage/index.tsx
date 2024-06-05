import React from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";

/**
 * Props for `FeaturedImage`.
 */
export type FeaturedImageProps =
  SliceComponentProps<Content.FeaturedImageSlice>;

/**
 * Component for "FeaturedImage" Slices.
 */
const FeaturedImage = ({ slice }: FeaturedImageProps): JSX.Element => {
  const imageUrl = slice.primary.image.url;
  const imageAlt = slice.primary.image.alt || "Featured Image";

  return (
    <section
      className="news-details-area pt-100"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="blog-details-desc">
              <div className="article-image">
                {imageUrl ? (
                  <Image
                    src={imageUrl}
                    alt={imageAlt}
                    width={900}
                    height={500}
                  />
                ) : (
                  <p>Image not available</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedImage;
