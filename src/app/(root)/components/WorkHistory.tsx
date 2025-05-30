"use client";

import { Separator } from "@/atoms/separator";
import Image from "next/image";


export default function WorkHistory () {

    return (<div className="flex flex-col p-7 gap-7 rounded-xl border-1 border-gray-300">
        <div className="flex flex-row gap-8">
            <div className="flex flex-col items-center">
                <Image 
                    src="https://xrqb2mg56u.ufs.sh/f/DbWOBxCL0tnlht2XTyHsIjKfVXpxP8LyzsCTdl2GgbSYRh9r"
                    alt="Headstarter AI Logo"
                    width={70}
                    height={70}
                    className="rounded-2xl"
                />
                <Separator 
                    orientation="vertical"
                    className="border-[1px]"
                />
            </div>
            <div className="flex flex-col gap-1">
                <p>Jul 2024- Present</p>
                <h3 className="font-bold">Software Engineering Resident</h3>
                <h4>Headstarter AI</h4>
                <p className="text-sm">
                    • Crafted and deployed 5+ AI apps using RAG, OpenAI, Pinecone, and Stripe, achieving 98% accuracy with 450+ total users
                    <br />
                    • Developed a support agent with RAG, OpenAI, and Pinecone, handling 1,000+ queries weekly, boosting accuracy by 40%
                    <br />
                    • Led a team of 4 engineers using MVC patterns and agile, dedicating 60+ hours to complete 14 projects in 2-week sprints
                </p>
            </div>
        </div>
        <div className="flex flex-row gap-8">
            <div className="flex flex-col items-center">
                <Image 
                    src="https://xrqb2mg56u.ufs.sh/f/DbWOBxCL0tnlzlyDfhMpquRNMztrJOhx8BUkwCIHsV64TZAj"
                    alt="Headstarter AI Logo"
                    width={70}
                    height={70}
                    className="rounded-2xl"
                />
                <Separator 
                    orientation="vertical"
                    className="border-[1px]"
                />
            </div>
            <div className="flex flex-col gap-1">
            <p>Jul 2024 - Sep 2024</p>
                <h3 className="font-bold">Software Engineering Intern</h3>
                <h4>Pixeland Technologies Inc</h4>
                <p className="text-sm">
                    • Created a scalable virtual oﬃce platform with React, Redux, and Firebase, boosting engagement by 30% across 10 teams
                    <br />
                    • Engineered real-time sync with Firebase, improving interactions for 2,000+ users with 20% reduced latency
                    <br />
                    • Developed WebRTC server with Express, optimizing video calls, cutting setup time by 30%, and supporting 500+ calls daily
                </p>
            </div>
        </div>
        <div className="flex flex-row gap-8">
            <div className="flex flex-col items-center">
                <Image 
                    src="https://xrqb2mg56u.ufs.sh/f/DbWOBxCL0tnlw6BXAv0eiHCuZ8gemBEnq61USjYR9DW4lwPh"
                    alt="Headstarter AI Logo"
                    width={70}
                    height={70}
                    className="rounded-2xl"
                />
                <Separator 
                    orientation="vertical"
                    className="border-[1px]"
                />
            </div>
            <div className="flex flex-col gap-1">
            <p>Feb 2024 - Apr 2024</p>
                <h3 className="font-bold">Software Engineering Intern</h3>
                <h4>Lob</h4>
                <p className="text-sm">
                    • Implemented authentication system with React and Auth0, reducing unauthorized access by 20% for 10,000+ users
                    <br />
                    • Optimized PostgreSQL and ExpressJS queries, reducing response time by 50% for 5,000+ active users
                    <br />
                    • Enhanced React components and ExpressJS code, improving page load times by 15% for 7,500+ users
                </p>
            </div>
        </div>
        <div className="flex flex-row gap-8">
            <div className="flex flex-col items-center">
                <Image 
                    src="https://xrqb2mg56u.ufs.sh/f/DbWOBxCL0tnlRUxw9BQWU7S1ANbaLGOvYK8t4rxizndTBemP"
                    alt="Headstarter AI Logo"
                    width={70}
                    height={70}
                    className="rounded-2xl"
                />
                <Separator 
                    orientation="vertical"
                    className="border-[1px]"
                />
            </div>
            <div className="flex flex-col gap-1">
            <p>Jul 2023 - Dec 2023</p>
                <h3 className="font-bold">Software Engineering Intern</h3>
                <h4>Sweep</h4>
                <p className="text-sm">
                    • Built automated document processing application with Docker and Flask, boosting eﬃciency by 40% for 1,000+ PDFs daily
                    <br />
                    • Integrated gpt-3.5 turbo powered virtual assistant for data insights, reducing errors by 20% in 3,000+ reviews weekly
                    <br />
                    • Devised a text compression algorithm, cutting file sizes by 30% and increasing speed by 40% for 2,000+ transfers daily
                </p>
            </div>
        </div>
        <div className="flex flex-row gap-8">
            <div className="flex flex-col">
                <Image 
                    src="https://xrqb2mg56u.ufs.sh/f/DbWOBxCL0tnlAre0uMacof4RtzrDZivg1dLkeU02nhawylSE"
                    alt="Headstarter AI Logo"
                    width={70}
                    height={70}
                    className="rounded-2xl"
                />
            </div>
            <div className="flex flex-col gap-1">
            <p>Jun 2023 - Aug 2023</p>
                <h3 className="font-bold">Software Engineering Intern</h3>
                <h4>Open Avenues (Remix Labs)</h4>
                <p className="text-sm">
                    • Connected 5+ external APIs using the RemixBuilder no-code platform, unlocking access to over 10k data points weekly
                    <br />
                    • Automated data analysis tasks via RemixBuilder’s no-code interface, reducing manual report preparation time by 15%
                    <br />
                    • Implemented automated data validation rules with RemixBuilder’s tools, improving data accuracy by 30%
                </p>
            </div>
        </div>
    </div>);
}