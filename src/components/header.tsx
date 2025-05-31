"use client";

import { Button } from "@/atoms/button";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";


export default function Header() {
    const router = useRouter();
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    }

    return (<header className="w-full max-w-3xl mx-auto px-4 sm:px-6 py-6 lg:px-8">
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
            <ul className="flex flex-row justify-center items-center gap-4">
                <li>
                    <Button
                        variant="ghost"
                        className="p-0 text-md w-6 h-6 flex"
                        onClick={toggleTheme}
                    >
                        {theme === 'dark' ? (
                            <Sun />
                        ) : (
                            <Moon />
                        )}
                    </Button>
                </li>
            </ul>
        </nav>
    </header>)
}