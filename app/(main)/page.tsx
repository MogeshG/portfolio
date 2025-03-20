import React from "react";
import GlowButton from "../components/GlowButton";
import HTMLIcon from "@/public/html.svg";
import CSSIcon from "@/public/css.svg";
import NodeIcon from "@/public/nodejs.svg";
import PrismaIcon from "@/public/prisma.svg";
import ReactIcon from "@/public/reactjs.svg";
import ExpressIcon from "@/public/express.svg";
import GitIcon from "@/public/git.svg";
import MongoDBIcon from "@/public/mongodb.svg";
import MySQLIcon from "@/public/mysql.svg";
import NextIcon from "@/public/nextjs.svg";
import SCSSIcon from "@/public/scss.svg";
import TypescriptIcon from "@/public/typescript.svg";
import TailwindIcon from "@/public/tailwindcss.svg";
import Image from "next/image";
import projects from "../constants/projects";
import Card from "../components/Card";

const page = () => {
  return (
    <div className="w-full">
      <div className="h-[95vh] text-white border-b border-b-[#323a47] grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        <div className="flex flex-col gap-3 justify-center items-center px-16">
          <div className="flex flex-col">
            <span className="text-gradient text-7xl">FULL STACK</span>
            <span className="text-gradient text-7xl">DEVELOPER</span>
          </div>
          <p className="text-2xl text-center">
            Hey there! I’m a full stack developer who loves working behind the scenes — mostly on
            the backend side of things. Love to create solid, scalable web apps.
          </p>
          <GlowButton scroll="#projects">My Work</GlowButton>
        </div>
        <div className="relative">
          <div className="bg-circle absolute w-[30rem] bottom-0 translate-x-1/3 aspect-square"></div>
        </div>
      </div>
      <div
        id="skills"
        className="skills h-fit md:px-[13%] px-10 pt-10 pb-20 text-white flex flex-col items-center gap-2 relative border-b border-b-[#323a47]"
      >
        <div className="w-full">
          <p className="text-gradient text-5xl w-fit">SKILLS</p>
        </div>
        <div className="md:w-[60%] px-6 flex flex-col items-center gap-4">
          <div className="text-3xl text-center">The Skill, tools and technologies I use:</div>
          <div className="flex gap-8 flex-wrap justify-center">
            <Image src={HTMLIcon} width={70} height={70} alt="HTML Icon"></Image>
            <Image src={CSSIcon} width={70} height={70} alt="CSS Icon"></Image>
            <Image src={ReactIcon} width={70} height={70} alt="React Icon"></Image>
            <Image src={TypescriptIcon} width={70} height={70} alt="React Icon"></Image>
            <Image src={NodeIcon} width={70} height={70} alt="React Icon"></Image>
            <Image src={ExpressIcon} width={70} height={70} alt="React Icon"></Image>
            <Image src={TailwindIcon} width={70} height={70} alt="React Icon"></Image>
            <Image src={NextIcon} width={70} height={70} alt="React Icon"></Image>
            <Image src={PrismaIcon} width={70} height={70} alt="React Icon"></Image>
            <Image src={MySQLIcon} width={70} height={70} alt="React Icon"></Image>
            <Image src={SCSSIcon} width={70} height={70} alt="React Icon"></Image>
            <Image src={MongoDBIcon} width={70} height={70} alt="React Icon"></Image>
            <Image src={GitIcon} width={70} height={70} alt="React Icon"></Image>
          </div>
        </div>
        <div className="bg-circle absolute w-[27rem] top-2 left-[15%] aspect-square"></div>
      </div>
      <div
        id="projects"
        className="projects h-fit md:px-[13%] px-10 pt-10 pb-20 text-white flex flex-col items-center gap-2 relative border-b border-b-[#323a47]"
      >
        <div className="w-full">
          <p className="text-gradient text-5xl w-fit">PROJECTS</p>
        </div>
        <div className="w-full h-fit grid gap-4 p-4 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
          {projects.map((project) => (
            <Card {...project} key={project.id} />
          ))}
        </div>
      </div>
      <div id="projects" className="page"></div>
    </div>
  );
};

export default page;

