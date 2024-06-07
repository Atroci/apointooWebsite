// src/libs/types/post.ts
export interface Post {
  id: string;
  uid: string;
  data: {
    meta_title: string;
    image?: { url: string; alt: string };
    slices: any;
  };
}
