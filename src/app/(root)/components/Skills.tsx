"use client";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/atoms/tooltip";
import Convex from "@/icons/Convex";
import Firebase from "@/icons/Firebase";
import HuggingFace from "@/icons/Huggingface";
import Langchain from "@/icons/Langchain";
import Nextjs from "@/icons/Nextjs";
import PostgreSQL from "@/icons/Postgresql";
import React from "@/icons/React";
import Stripe from "@/icons/Stripe";
import Supabase from "@/icons/Supabase";
import TailwindCSS from "@/icons/Tailwindcss";
import TensorFlow from "@/icons/Tensorflow";
import Typescript from "@/icons/Typescripticon";

export default function Skills() {
  return (
    <section className="flex flex-col w-full gap-4">
      <h2 className="text-3xl">Skills</h2>
      <div className="flex flex-row flex-wrap justify-start sm:justify-evenly gap-4">
        <Tooltip>
          <TooltipTrigger>
            <Nextjs width={35} height={35} />
          </TooltipTrigger>
          <TooltipContent>Nextjs</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Typescript width={35} height={35} />
          </TooltipTrigger>
          <TooltipContent>Typescript</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <React width={35} height={35} />
          </TooltipTrigger>
          <TooltipContent>React</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <TailwindCSS width={35} height={35} />
          </TooltipTrigger>
          <TooltipContent>TailwindCSS</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Firebase width={35} height={35} />
          </TooltipTrigger>
          <TooltipContent>Firebase</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Convex width={54} height={45} />
          </TooltipTrigger>
          <TooltipContent>Convex</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Supabase width={35} height={35} />
          </TooltipTrigger>
          <TooltipContent>Supabase</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <PostgreSQL width={35} height={35} />
          </TooltipTrigger>
          <TooltipContent>PostgreSQL</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <TensorFlow width={35} height={35} />
          </TooltipTrigger>
          <TooltipContent>Tensorflow</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <HuggingFace width={35} height={35} />
          </TooltipTrigger>
          <TooltipContent>Huggingface</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Langchain width={35} height={35} fill="#204544" />
          </TooltipTrigger>
          <TooltipContent>Langchain</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Stripe width={35} height={35} />
          </TooltipTrigger>
          <TooltipContent>Stripe</TooltipContent>
        </Tooltip>
      </div>
    </section>
  );
}
