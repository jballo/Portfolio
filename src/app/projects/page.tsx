"use client";

import Projects from "./components/Projects";


export default function Home() {
  return (
    <div className="flex flex-col w-full max-w-3xl mx-auto py-6 px-4 sm:px-6 lg:px-8 gap-7">
      {/* Title Section */}
      <section className="flex flex-col w-full">
        <h2 className="text-4xl font-serif">My Projects</h2>
      </section>
      {/* Projects Section */}
      <Projects />
    </div>
  );
}