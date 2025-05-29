"use client";

import { Button } from "@/atoms/button";
import { FileDown } from "lucide-react";
import Image from "next/image";
import type { SVGProps } from "react";

const LinkedIn = (props: SVGProps<SVGSVGElement>) => <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256" {...props}><path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="#0A66C2" /></svg>;

const GitHub = (props: SVGProps<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" fill="#000" /></svg>;

const Gmail = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 49.4 512 399.42"
        width="1em"
        height="1em"
        {...props}
    >
        <g fill="none" fillRule="evenodd">
            <g fillRule="nonzero">
                <path
                    fill="#4285f4"
                    d="M34.91 448.818h81.454V251L0 163.727V413.91c0 19.287 15.622 34.91 34.91 34.91z"
                />
                <path
                    fill="#34a853"
                    d="M395.636 448.818h81.455c19.287 0 34.909-15.622 34.909-34.909V163.727L395.636 251z"
                />
                <path
                    fill="#fbbc04"
                    d="M395.636 99.727V251L512 163.727v-46.545c0-43.142-49.25-67.782-83.782-41.891z"
                />
            </g>
            <path
                fill="#ea4335"
                d="M116.364 251V99.727L256 204.455 395.636 99.727V251L256 355.727z"
            />
            <path
                fill="#c5221f"
                fillRule="nonzero"
                d="M0 117.182v46.545L116.364 251V99.727L83.782 75.291C49.25 49.4 0 74.04 0 117.18z"
            />
        </g>
    </svg>
);

const Medium = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        fill="currentColor"
        {...props}
    >
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
    </svg>
);

export default function Hero() {
    return (<section className="flex flex-row w-full">
        <div className="flex flex-col w-2/3 gap-8">
            <h1 className="text-4xl">Jonathan Ballona Sanchez</h1>
            <h3 className="text-lg">AI Engineer from Bay Area, CA</h3>
            <p className="text-xl">Building Fast, Shipping Fast. Cracked engineer who lives to learn.</p>
            <div className="flex flex-row gap-7">
                <Button variant="outline"><FileDown /> Resume</Button>
                <a href="https://www.linkedin.com/in/jballo/" target="_blank">
                    <LinkedIn height={30} width={30} />
                </a>
                <a href="https://github.com/jballo" target="_blank">
                    <GitHub height={35} width={35} />
                </a>
                <a href="https://medium.com/@jballo" target="_blank">
                    <Medium height={35} width={35} />
                </a>
                <a>
                    <Gmail height={35} width={35} />
                </a>
            </div>
        </div>
        <div className="flex flex-row justify-end items-center w-1/3">
            <Image 
                src="https://xrqb2mg56u.ufs.sh/f/DbWOBxCL0tnld6MB7bxmRPWeyrM9u3jw0TFsbGNUVd6JS4Al"
                alt="Hero Picture of Jonathan Ballona Sanchez"
                height={400}
                width={200}
                className="rounded-xl"
            />
        </div>
    </section>)
}