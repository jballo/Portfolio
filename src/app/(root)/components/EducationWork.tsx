"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/atoms/tabs";
import WorkHistory from "./WorkHistory";
import EducationHistory from "./EducationHistory";


export default function EducationWork() {
    return (<section className="flex flex-col w-full">
        <Tabs defaultValue="experience" className="w-full gap-5">
            <TabsList className="w-full">
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
            </TabsList>
            <TabsContent value="experience">
                <WorkHistory />
            </TabsContent>
            <TabsContent value="education">
                <EducationHistory />
            </TabsContent>
        </Tabs>
    </section>)
}