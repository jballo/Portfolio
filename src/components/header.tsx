"use client";

import { Button } from "@/atoms/button";
import { Sun } from "lucide-react";


export default function Header() {
    return (<header className="w-full max-w-4xl mx-auto sm:px-6 py-6 lg:px-8">
        <nav className="flex flex-row justify-between w-full">
            <ul className="flex flex-row gap-6">
                <li>
                    <Button>Home</Button>
                </li>
                <li>
                    <Button>Projects</Button>
                </li>
                <li>
                    <Button>Blog</Button>
                </li>
                <li>
                    <Button>Contact</Button>
                </li>
            </ul>
            <ul className="flex flex-row gap-4">
                <li>
                    <Button>Bot</Button>
                </li>
                <li>
                    <Button><Sun /></Button>
                </li>
            </ul>
        </nav>
    </header>)
}