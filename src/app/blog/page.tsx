"use client";

import Blogs from "./components/Blogs";


export default function Blog() {
    return (
        <div className="flex flex-col w-full max-w-3xl mx-auto py-6 px-4 sm:px-6 lg:px-8 gap-12">
            {/* Title Section */}
            <section className="flex flex-col w-full">
                <h2 className="text-4xl font-serif">My Blog Posts</h2>
            </section>
            {/* Blogs Section */}
            <Blogs />
        </div>
    );
}