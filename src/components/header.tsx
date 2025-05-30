"use client";

import { Button } from "@/atoms/button";
import { Bot, Sun } from "lucide-react";
import { useRouter } from "next/navigation";


export default function Header() {
    const router = useRouter();

    return (<header className="w-full max-w-3xl mx-auto sm:px-6 py-6 lg:px-8">
        <nav className="flex flex-row justify-between w-full">
            <ul className="flex flex-row gap-6">
                <li>
                    <Button
                        variant="link" 
                        onClick={() => router.push('/')}
                        className="p-0 text-md"
                    >
                        Home
                    </Button>
                </li>
                <li>
                    <Button 
                        variant="link"
                        onClick={() => router.push('/projects')}
                        className="p-0 text-md"
                    >
                        Projects
                    </Button>
                </li>
                <li>
                    <Button 
                        variant="link"
                        onClick={() => router.push('/blog')}
                        className="p-0 text-md"
                    >
                        Blog
                    </Button>
                </li>
            </ul>
            <ul className="flex flex-row gap-4">
                <li className="hidden">
                    <Button
                        variant="ghost"
                        className="p-0 text-md"
                    >
                        <Sun />
                    </Button>
                </li>
            </ul>
        </nav>
    </header>)
}