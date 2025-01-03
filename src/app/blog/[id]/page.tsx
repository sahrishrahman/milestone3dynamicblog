"use client";

import BlogDetails from "@/components/BlogDetails";
import CommentsSection from "@/components/CommentsSection";
import beautyBlogs from "@/components/data/BlogData";
import { use } from "react"; // Import `use` to unwrap promises

const blogs = beautyBlogs

interface BlogPageProps {
  params: Promise<{ id: string }>; // Note: `params` is now a Promise
}

export default function BlogPage({ params }: BlogPageProps) {
  const resolvedParams = use(params); // Unwrap the promise using `use()`
  const blog = blogs.find((b) => b.id === resolvedParams.id);

  if (!blog) {
    return <p className="text-center mt-8">Blog not found</p>;
  }

  return (
    <main className="container max-w-5xl mx-auto px-4 py-10">
      <BlogDetails blog={blog} />
      <CommentsSection/>      
    </main>
  );
}
