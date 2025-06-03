"use client";

import { Separator } from "@/atoms/separator";
import Image from "next/image";

interface Experience {
    time: string,
    title: string,
    company: string,
    imageUrl: string,
    description: string[],
}

const experiences: Experience[] = [
    {
        time: "Jul 2024- Present",
        company: "Headstarter AI",
        imageUrl: "https://xrqb2mg56u.ufs.sh/f/DbWOBxCL0tnlht2XTyHsIjKfVXpxP8LyzsCTdl2GgbSYRh9r",
        title: "Software Engineering Resident",
        description: ["• Crafted and deployed 5+ AI apps using RAG, OpenAI, Pinecone, and Stripe, achieving 98% accuracy with 450+ total users", "• Developed a support agent with RAG, OpenAI, and Pinecone, handling 1,000+ queries weekly, boosting accuracy by 40%", "• Led a team of 4 engineers using MVC patterns and agile, dedicating 60+ hours to complete 14 projects in 2-week sprints"]
    },
    {
        time: "Jul 2024 - Sep 2024",
        company: "Pixeland Technologies Inc",
        imageUrl: "https://xrqb2mg56u.ufs.sh/f/DbWOBxCL0tnlzlyDfhMpquRNMztrJOhx8BUkwCIHsV64TZAj",
        title: "Software Engineering Intern",
        description: ["• Created a scalable virtual oﬃce platform with React, Redux, and Firebase, boosting engagement by 30% across 10 teams", "• Engineered real-time sync with Firebase, improving interactions for 2,000+ users with 20% reduced latency", "• Developed WebRTC server with Express, optimizing video calls, cutting setup time by 30%, and supporting 500+ calls daily"]
    },
    {
        time: "Feb 2024 - Apr 2024",
        company: "Lob",
        imageUrl: "https://xrqb2mg56u.ufs.sh/f/DbWOBxCL0tnlw6BXAv0eiHCuZ8gemBEnq61USjYR9DW4lwPh",
        title: "Software Engineering Intern",
        description: ["• Implemented authentication system with React and Auth0, reducing unauthorized access by 20% for 10,000+ users", " • Optimized PostgreSQL and ExpressJS queries, reducing response time by 50% for 5,000+ active users", "• Enhanced React components and ExpressJS code, improving page load times by 15% for 7,500+ users"]
    },
    {
        time: "Jul 2023 - Dec 2023",
        company: "Sweep",
        imageUrl: "https://xrqb2mg56u.ufs.sh/f/DbWOBxCL0tnlRUxw9BQWU7S1ANbaLGOvYK8t4rxizndTBemP",
        title: "Software Engineering Intern",
        description: ["• Built automated document processing application with Docker and Flask, boosting eﬃciency by 40% for 1,000+ PDFs daily", "• Integrated gpt-3.5 turbo powered virtual assistant for data insights, reducing errors by 20% in 3,000+ reviews weekly", "• Devised a text compression algorithm, cutting file sizes by 30% and increasing speed by 40% for 2,000+ transfers daily"]
    },
    {
        time: "Jun 2023 - Aug 2023",
        company: "Open Avenues (Remix Labs)",
        imageUrl: "https://xrqb2mg56u.ufs.sh/f/DbWOBxCL0tnlAre0uMacof4RtzrDZivg1dLkeU02nhawylSE",
        title: "Software Engineering Intern",
        description: ["• Connected 5+ external APIs using the RemixBuilder no-code platform, unlocking access to over 10k data points weekly", "• Automated data analysis tasks via RemixBuilder’s no-code interface, reducing manual report preparation time by 15%", "• Implemented automated data validation rules with RemixBuilder’s tools, improving data accuracy by 30%"]
    }
]

export default function WorkHistory() {

    return (<div className="flex flex-col p-7 gap-7 rounded-xl border-1 border-gray-300 dark:border-neutral-800">
        {experiences.map((experience, index) => (
            <div key={index} className="flex flex-row gap-8">
                <div className="flex flex-col items-center gap-1 sm:gap-2">
                    <div className="w-11 h-11 sm:w-[50px] sm:h-[50px] relative flex-shrink-0">
                        <Image
                            src={experience.imageUrl}
                            alt={`${experience.company} Logo`}
                            fill
                            sizes="(max-width: 640px) 44px, 50px"
                            className="rounded-2xl object-cover"
                            priority={index === 0}
                        />
                    </div>
                    {index !== experiences.length - 1 && (
                        <Separator orientation="vertical" className="border-[1px]" />
                    )}
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-sm sm:text-md">{experience.time}</p>
                    <h3 className="font-bold text-sm sm:text-lg">{experience.title}</h3>
                    <h4 className="text-sm sm:text-md">{experience.company}</h4>
                    <div className="text-[12px] sm:text-[13px] dark:text-gray-400">
                        {experience.description.map((bullet, index) => (
                            <p key={index}>
                                {bullet}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        ))}
    </div>);
}