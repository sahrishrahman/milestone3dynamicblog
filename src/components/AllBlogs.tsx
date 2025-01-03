import Link from 'next/link'
import React from 'react'
import beautyBlogs from './data/BlogData'
import Image from 'next/image'

const blogs = beautyBlogs
interface AllBlogsProps {
    heading: string;
  }
const AllBlogs = ({heading}:AllBlogsProps) => {
  return (
    <main className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-playfair text-[#5E3A87] font-bold mb-8 text-center">{heading}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {blogs.map((blog) => (
          <Link href={`/blog/${blog.id}`} key={blog.id}>
            <div className="border min-h-96 bg-white rounded-lg shadow hover:shadow-lg transition transform   md:hover:scale-105 hover:translate-y-2 duration-300 ">
              <div className="relative w-full h-56">
                {/* Using next/image for optimized images */}
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover rounded-t-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Responsive sizing
                />
              </div>
              <div className="p-4 space-y-2">
                <h2 className="text-xl font-semibold min-h-14">{blog.title}</h2>
                <p className="text-gray-600 text-md">{blog.description}</p>
                <p className="text-gray-400 text-xs mt-2">
                  By {blog.author} on {blog.date}
                </p>
                <button className="text-[#5E3A87] font-semibold font-poppins text-xl hover:underline">Read More</button>
              </div>
            </div> 
          </Link>
        ))}
      </div>
    </main>
  )
}

export default AllBlogs