import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section className="w-full bg-[#c8afe5]">
      
       {/* about blog  */}
      <div className="text-center hidden md:block py-8 bg-[#FAF8F6]">
        <p className="text-lg md:text-xl mt-4 font-poppins text-[gray-600]">
          Discover the latest beauty trends, tips, and everything you need to enhance your natural glow.
        </p>
      </div>

      {/* image  */}
      <div className='relative rounded-lg'>
      <div className="relative rounded-lg w-full h-[550px] md:h-[500px]">
        <Image 
          src="/hero.png" 
          alt="Beauty Blog Hero" 
          layout="fill" 
          className="object-cover md:object-contain rounded-sm" 
        />
        
        {/* text  */}
        <div className="absolute inset-0 rounded-sm flex items-center justify-center w-full text-white">
          {/* overlay  */}
          <div className="bg-black bg-opacity-30 p-4 md:p-8 rounded-lg w-full  h-full mx-auto md:mx-0 text-center content-end pb-10">
            <h1 className="text-4xl md:text-5xl font-playfair text-shadow-md">
              Elevate Your Beauty Routine!!<br />Transform your routine, transform your confidence.
            </h1>
            <p className="text-lg md:text-xl mt-4 font-poppins">
              Explore expert skincare and makeup advice to help you shine every day.
            </p>
          <Link href={"/allblogs"}><button className="mt-6 px-6 py-3 bg-[#4a296f] text-white rounded-lg hover:bg-[#24103b] transition duration-300">
              Start Your Journey
            </button></Link>  
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Hero
