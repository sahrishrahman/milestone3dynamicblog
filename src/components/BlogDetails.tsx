import { Blog } from "@/types/blog";
import Image from "next/image";

interface BlogDetailsProps {
  blog: Blog;
}

export default function BlogDetails({ blog }: BlogDetailsProps) {
  return (
    <div>
        <div className="relative w-full h-72 md:h-96 mb-6">
        <Image
          src={blog.image}
          alt={blog.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        </div>
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-600 mb-6">By {blog.author} on {blog.date}</p>
      <p className="prose  text-gray-800">{blog.content}</p>
    </div>
  );
}
