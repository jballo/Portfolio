"use client";

import { Separator } from "@/atoms/separator";
import Image from "next/image";

interface Education {
    title: string,
    institution: string,
    institutionImageUrl: string,
}


const educations: Education[] = [
    {
        title: "Bachelors of Science in Computer Science",
        institution: "University of California, Merced",
        institutionImageUrl: "https://xrqb2mg56u.ufs.sh/f/DbWOBxCL0tnlaJJnn1bwkeJVTOC9bPX4tFj17cfKqGzS85Hg"
    },
    {
        title: "iOS Development Certificate",
        institution: "CodePath",
        institutionImageUrl: "https://xrqb2mg56u.ufs.sh/f/DbWOBxCL0tnla81MZDwkeJVTOC9bPX4tFj17cfKqGzS85Hgh"
    },
    {
        title: "Software Engineering Certificate",
        institution: "CodePath",
        institutionImageUrl: "https://xrqb2mg56u.ufs.sh/f/DbWOBxCL0tnla81MZDwkeJVTOC9bPX4tFj17cfKqGzS85Hgh"
    }
]

export default function EducationHistory() {
    return (<div className="flex flex-col p-7 gap-7 rounded-xl border-1 border-gray-300 dark:border-neutral-800">
        {educations.map((education, index) => (
            <div key={index} className="flex flex-row gap-8">
                <div className="flex flex-col items-center gap-1 sm:gap-2">
                    <div className="w-11 h-11 sm:w-[50px] sm:h-[50px] relative flex-shrink-0">
                        <Image
                            src={education.institutionImageUrl}
                            alt={`${education.institution} Logo`}
                            fill
                            sizes="(max-width: 640px) 44px, 50px"
                            className="rounded-2xl object-cover"
                            priority={index === 1}
                        />
                    </div>
                    {index < educations.length - 1 && (
                        <Separator
                            orientation="vertical"
                            className="border-[1px]"
                        />
                    )}
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="font-bold text-sm sm:text-lg">{education.title}</h3>
                    <h4 className="text-sm sm:text-md dark:text-gray-400">{education.institution}</h4>
                </div>
            </div>
        ))}
    </div>);
}