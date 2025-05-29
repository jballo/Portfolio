"use client";

import { Button } from "@/atoms/button";
import { Separator } from "@/atoms/separator";
import { ArrowRight } from "lucide-react";


export default function RecentBlogs() {
    return (<section className="flex flex-col w-full gap-4">
        <div className="flex flex-row justify-between w-full">
            <h2 className="text-3xl">Recent Posts</h2>
            <Button
                variant="ghost"
            >
                view more <ArrowRight />
            </Button>
        </div>
        <div className="flex flex-col w-full border-1 rounded-xl">
            <a href="https://medium.com/@jballo/evaluating-llm-responses-with-rag-and-deepeval-1e3e8889c177" target="_blank">
                <div className="flex flex-col w-full p-8 gap-2">
                    <h3 className="font-bold">Evaluating LLM Responses with RAG and DeepEval</h3>
                    <div className="flex flex-row w-full justify-between">
                        <p>Built a fast, scalable API for image creation in &lt;2 seconds using Modal’s A100 GPUs</p>
                        <p>Apr 2025</p>
                    </div>
                </div>
            </a>
            <Separator />
            <a href="https://medium.com/@jballo/building-an-efficient-image-generation-api-with-modal-fastapi-and-quantization-91e0f2000d05" target="_blank">
                <div className="flex flex-col w-full p-8 gap-2">
                    <h3 className="font-bold">Building an Efficient Image Generation API with Modal, FastAPI, and Quantization</h3>
                    <div className="flex flex-row w-full justify-between">
                        <p>Built a fast, scalable API for image creation in &lt;2 seconds using Modal’s A100 GPUs</p>
                        <p>Dec 2024</p>
                    </div>
                </div>
            </a>
        </div>
    </section>);
}