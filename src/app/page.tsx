import AllBlogs from "@/components/AllBlogs";
import Hero from "@/components/Hero";


export default function Home() {
  return (
    <main>
      <Hero/>
     <AllBlogs heading={"Latest Blog Posts"}/>
    </main>
  );
}
