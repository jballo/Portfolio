import EducationWork from "./components/EducationWork";
import FeaturedProjects from "./components/FeaturedProjects";
import Hero from "./components/Hero";
import RecentBlogs from "./components/RecentBlogs";
import Skills from "./components/Skills";


export default function Home() {
  return (
    <div className="flex flex-col w-full max-w-3xl mx-auto py-6 px-4 sm:px-6 lg:px-8 gap-12">
      {/* Hero Section */}
      <Hero />
      {/* Skills Section */}
      <Skills />
      {/* Work + Education Section */}
      <EducationWork />
      {/* Featured Projects Section */}
      <FeaturedProjects />
      {/* Recent Blog Posts Section */}
      <RecentBlogs />

    </div>
  );
}
