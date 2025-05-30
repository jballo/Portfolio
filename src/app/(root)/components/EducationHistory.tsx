"use client";

import { Separator } from "@/atoms/separator";
import Image from "next/image";


export default function EducationHistory() {
    return (<div className="flex flex-col p-7 gap-7 rounded-xl border-1 border-gray-300 dark:border-neutral-800">
        <div className="flex flex-row gap-8">
            <div className="flex flex-col items-center">
                <Image
                    src="https://xrqb2mg56u.ufs.sh/f/DbWOBxCL0tnlaJJnn1bwkeJVTOC9bPX4tFj17cfKqGzS85Hg"
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
                <h3 className="font-bold">University of California, Merced</h3>
                <h4>Bachelors of Science in Computer Science</h4>
            </div>
        </div>
        <div className="flex flex-row gap-8">
            <div className="flex flex-col items-center">
                <Image
                    src="https://xrqb2mg56u.ufs.sh/f/DbWOBxCL0tnla81MZDwkeJVTOC9bPX4tFj17cfKqGzS85Hgh"
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
                <h3 className="font-bold">iOS Development Certificate</h3>
                <h4>CodePath</h4>
            </div>
        </div>
        <div className="flex flex-row gap-8">
            <div className="flex flex-col items-center">
                <Image
                    src="https://xrqb2mg56u.ufs.sh/f/DbWOBxCL0tnla81MZDwkeJVTOC9bPX4tFj17cfKqGzS85Hgh"
                    alt="Headstarter AI Logo"
                    width={70}
                    height={70}
                    className="rounded-2xl"
                />
            </div>
            <div className="flex flex-col gap-1">
                <h3 className="font-bold">Software Engineering Certificate</h3>
                <h4>CodePath</h4>
            </div>
        </div>
    </div>);
}