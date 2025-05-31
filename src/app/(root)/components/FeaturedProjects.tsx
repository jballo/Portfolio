"use client";

import { Button } from "@/atoms/button";
import { Container, Globe } from "lucide-react";
import Image from "next/image";

export default function FeaturedProjects() {
    return (<section className="flex flex-col w-full">
        <h2 className="text-3xl">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center gap-4">
            <div className="flex flex-col items-center w-full p-4 gap-5 border-1 dark:border-neutral-800 rounded-lg">
                <Image
                    src="https://xrqb2mg56u.ufs.sh/f/DbWOBxCL0tnlGku9W2Krfb4VW5x78FhpSNPz9asRimtvlD1n"
                    alt="VALLM Dash"
                    width={400}
                    height={200}
                />
                <h4>VALLM</h4>
                <p className="dark:text-gray-400">LLM Evaluation on real web content</p>
                <div className="flex flex-row gap-2">
                    <Button><a href="https://www.vallm.app/" target="_blank" className="flex flex-row"><Globe />Website</a></Button>
                    <Button><a href="https://github.com/jballo/VALLM" target="_blank" className="flex flex-row"><Container />Source</a></Button>
                </div>
            </div>
            <div className="flex flex-col items-center w-full p-4 gap-5 border-1 dark:border-neutral-800 rounded-lg">
                <Image
                    src="https://xrqb2mg56u.ufs.sh/f/DbWOBxCL0tnlQAerjvpGmT9kofx7raLwEetAbNMGshI4KFDC"
                    alt="Pentagram Dash"
                    width={400}
                    height={200}
                />
                <h4>Pentagram</h4>
                <p className="dark:text-gray-400">AI Image Generating Social Media Platform</p>
                <div className="flex flex-row gap-2">
                    <Button><a href="https://github.com/jballo/pentagram" target="_blank" className="flex flex-row"><Globe />Website</a></Button>
                    <Button><a href="https://github.com/jballo/pentagram" target="_blank" className="flex flex-row"><Container />Source</a></Button>
                </div>
            </div>
        </div>
    </section>);
}