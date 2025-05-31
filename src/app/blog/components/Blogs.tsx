"use client";

import { Button } from "@/atoms/button";
import { Input } from "@/atoms/input";
import { Separator } from "@/atoms/separator";
import { Delete } from "lucide-react";
import { useState } from "react";


interface Blog {
    url: string,
    title: string,
    content: string,
    date: string
}


const blogs: Blog[] = [
    {
        url: "https://medium.com/@jballo/evaluating-llm-responses-with-rag-and-deepeval-1e3e8889c177",
        title: "Evaluating LLM Responses with RAG and DeepEval",
        content: "Built a scalable API for evaluation 6+ LLM responses based off of scraped content",
        date: "Apr 2025"
    },
    {
        url: "https://medium.com/@jballo/building-an-efficient-image-generation-api-with-modal-fastapi-and-quantization-91e0f2000d05",
        title: "Building an Efficient Image Generation API with Modal, FastAPI, and Quantization",
        content: "Built a fast, scalable API for image creation in <2 seconds using Modal’s A100 GPUs",
        date: "Dec 2024"
    },
    {
        url: "https://medium.com/@jballo/building-a-context-driven-ai-answer-engine-with-next-js-puppeteer-cheerio-and-groq-676b9dd418bb",
        title: "Building a Context-Driven AI Answer Engine with Next.js, Puppeteer, Cheerio, and Groq",
        content: "Created a chatbot using Next.js, Puppeteer, Cheerio, and Groq for context rich responses",
        date: "Dec 2025"
    },
    {
        url: "https://medium.com/@jballo/capturing-and-sending-a-base64-image-for-ai-predictions-in-next-js-db8dceb84f7b",
        title: "Capturing and Sending a Base64 Image for AI Predictions in Next.js",
        content: "Captured images and OpenAI’s GPT -4o Mini for AI-driven food recognition",
        date: "Oct 2024"
    },
    {
        url: "https://medium.com/@jballo/the-geopolitical-implications-of-the-io-domain-disappearance-872b74696862",
        title: "The Geopolitical Implications of the .io Domain Disappearance",
        content: "Analyzed .io domain retirement’s impact on startups and infrastructure",
        date: "Oct 2024"
    }
]

export default function Blogs() {
    const [searchText, setSearchText] = useState<string>("");


    return (<section className="flex flex-col w-full gap-4">
        <div className="flex flex-row justify-between w-full gap-2">
            <Input
                type="text"
                placeholder="Search for blog..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
            <Button
                variant="ghost"
                onClick={() => setSearchText("")}
            >
                Clear <Delete />
            </Button>
        </div>
        <div className="flex flex-col w-full border-1 rounded-xl">
            {blogs
                .filter((blog) => blog.title.toLowerCase().includes(searchText.toLowerCase()))
                .map((blog, index) => (
                    <div key={index} className="flex flex-col w-full">
                        <a href={blog.url} target="_blank">
                            <div className="flex flex-col w-full p-8 gap-2">
                                <h3 className="font-bold">{blog.title}</h3>
                                <div className="flex flex-row w-full justify-between gap-4">
                                    <p className="dark:text-gray-400">{blog.content}</p>
                                    <p>{blog.date}</p>
                                </div>
                            </div>
                        </a>
                        {index !== blogs.filter((blog) => blog.title.toLowerCase().includes(searchText.toLowerCase())).length && (
                            <Separator />
                        )}
                    </div>
                ))
            }

        </div>
    </section>);
}