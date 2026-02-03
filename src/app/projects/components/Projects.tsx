"use client";

import { Badge } from "@/atoms/badge";
import { Button } from "@/atoms/button";
import { Container, Globe } from "lucide-react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  technologes: string[];
  website?: string;
  source?: string;
}

const projects: Project[] = [
  {
    title: "Vallm.chat",
    description: "Powerful multi-model chat and conversation branching",
    imageUrl:
      "https://xrqb2mg56u.ufs.sh/f/DbWOBxCL0tnlqnnUyJ08GUEp2ln0mCo47Jz8krwuKeaSt13V",
    technologes: [
      "nextjs",
      "tailwind",
      "convex",
      "vercelai",
      "uploadthing",
      "clerk",
    ],
    source: "https://github.com/jballo/vallm.chat",
  },
  {
    title: "VALLM",
    description: "LLM Evaluation on real web/scraped content",
    imageUrl:
      "https://xrqb2mg56u.ufs.sh/f/DbWOBxCL0tnlGku9W2Krfb4VW5x78FhpSNPz9asRimtvlD1n",
    technologes: [
      "nextjs",
      "tailwind",
      "postgresql",
      "flask",
      "firecrawl",
      "clerk",
    ],
    website: "https://www.vallm.app/",
    source: "https://github.com/jballo/VALLM",
  },
  {
    title: "Pentagram",
    description: "AI Image Generating Social Media Platform",
    imageUrl:
      "https://xrqb2mg56u.ufs.sh/f/DbWOBxCL0tnlQAerjvpGmT9kofx7raLwEetAbNMGshI4KFDC",
    technologes: ["nextjs", "tailwind", "postgresql", "modal", "fastapi"],
    source: "https://github.com/jballo/pentagram",
  },
  {
    title: "AI Book Reader",
    description: "Let AI Book Reader, read your books for you",
    imageUrl:
      "https://xrqb2mg56u.ufs.sh/f/DbWOBxCL0tnlGpxZZIKrfb4VW5x78FhpSNPz9asRimtvlD1n",
    technologes: ["nextjs", "tailwind", "express", "uploadthing", "playai-tts"],
    website: "https://ai-book-reader-jballos-projects.vercel.app/",
    source: "https://github.com/jballo/AI-Book-Reader",
  },
  {
    title: "Agentic Recruiter",
    description: "Create outreach message sequences",
    imageUrl:
      "https://xrqb2mg56u.ufs.sh/f/DbWOBxCL0tnlaq3p3dwkeJVTOC9bPX4tFj17cfKqGzS85Hgh",
    technologes: ["nextjs", "tailwind", "postgresql", "flask", "clerk"],
    source: "https://github.com/jballo/AgenticRecruiter",
  },
  {
    title: "Brain Tumor Classification",
    description: "Classify and analyze brain scans",
    imageUrl:
      "https://xrqb2mg56u.ufs.sh/f/DbWOBxCL0tnlPaRuuOtSDpdueOkK94wAV0TrjEFW8XqhbYtQ",
    technologes: ["python", "streamlit", "tensorflow", "pandas", "opencv"],
    source: "https://github.com/jballo/BrainTumorClassification.git",
  },
  {
    title: "PantryGrove",
    description: "Manage pantry inventory with ease",
    imageUrl:
      "https://xrqb2mg56u.ufs.sh/f/DbWOBxCL0tnldI3LLDLxmRPWeyrM9u3jw0TFsbGNUVd6JS4A",
    technologes: ["nextjs", "material-ui", "firestore", "openai"],
    website: "https://pantry-tracker-one-alpha.vercel.app/",
    source: "https://github.com/jballo/Pantry_Tracker",
  },
];

export default function Projects() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col items-center w-full p-4 gap-5 border-1 border-gray-300 dark:border-neutral-700 rounded-lg"
        >
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={400}
            height={200}
          />
          <div className="flex flex-row flex-wrap justify-center w-11/12 gap-1">
            {project.technologes.map((technology, index) => (
              <Badge
                key={index}
                className="text-gray-500 bg-slate-200 dark:text-gray-300 dark:bg-slate-800"
              >
                {technology}
              </Badge>
            ))}
          </div>
          <div className="flex flex-col justify-end w-10/12 h-full gap-2">
            <h4>{project.title}</h4>
            <p className="dark:text-gray-400">{project.description}</p>
            <div className="flex flex-row w-full gap-2">
              {project.source && (
                <Button className="w-16 h-8 text-[10px]">
                  <a
                    href={project.source}
                    target="_blank"
                    className="flex flex-row items-center gap-1"
                  >
                    <Container />
                    Source
                  </a>
                </Button>
              )}
              {project.website && (
                <Button className="w-14 h-8 text-[10px]">
                  <a
                    href={project.website}
                    target="_blank"
                    className="flex flex-row items-center gap-1"
                  >
                    <Globe />
                    Site
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
