import React from "react";
import Link from "next/link";
import { KeyTextField } from "@prismicio/types";

interface Post {
  uid: string;
  data: {
    meta_title: KeyTextField;
  };
}

interface PostNavigationProps {
  prevPost: Post | null;
  nextPost: Post | null;
}

const PostNavigation: React.FC<PostNavigationProps> = ({
  prevPost,
  nextPost,
}) => {
  return (
    <div className="post-navigation">
      {prevPost && (
        <div className="prev-post">
          <Link href={`/blog/${prevPost.uid}`}>
            <a>← Prev Post: {prevPost.data.meta_title || "Untitled"}</a>
          </Link>
        </div>
      )}
      {nextPost && (
        <div className="next-post">
          <Link href={`/blog/${nextPost.uid}`}>
            <a>Next Post: {nextPost.data.meta_title || "Untitled"} →</a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default PostNavigation;
