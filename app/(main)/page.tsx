"use client";
import React, { FormEvent, useState } from "react";
import Modal from "react-modal";
import { Toaster, toast } from "sonner";
import CloseSVG from "@/public/close.svg";
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
import MessageIcon from "@/public/message.svg";
import LinkedIn from "@/public/linkedin.svg";
import InstagramIcon from "@/public/instagram.svg";
import ProfileImage from "@/public/profile.png";
import Image from "next/image";
import projects, { projectType } from "../constants/projects";
import Card from "../components/Card";

const page = () => {
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sendText, setSendText] = useState("Say Hello");
  const [current, setCurrent] = useState<projectType | null>(null);
  const [showModel, setShowModel] = useState(false);

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      zIndex: 1000,
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      width: "80%",
      color: "white",
      backgroundColor: "transparent",
      backdropFilter: "blur(50px)",
      transform: "translate(-50%, -50%)",
    },
  };

  const handleShowModel = (val: number) => {
    const project = projects.filter((data) => data.id === val);
    setCurrent(project[0]);
    setShowModel((prev) => !prev);
  };

  const handleSubmit = async (event: FormEvent) => {
    event?.preventDefault();
    setSendText("Sending...");

    let error = 0;
    const form = event.target as HTMLFormElement;
    const nameInput = form.elements.namedItem("name") as HTMLInputElement;
    const emailInput = form.elements.namedItem("email") as HTMLInputElement;
    const messageInput = form.elements.namedItem("message") as HTMLInputElement;

    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (name.length < 3) {
      setErrors((prev) => ({ ...prev, name: "How would I call you?!" }));
      error = 1;
    } else {
      setErrors((prev) => ({ ...prev, name: "" }));
    }
    if (!emailRegex.test(email)) {
      setErrors((prev) => ({ ...prev, email: "Need to reach you, Right?" }));
      error = 1;
    } else {
      setErrors((prev) => ({ ...prev, email: "" }));
    }
    if (message.trim().length === 0) {
      setErrors((prev) => ({ ...prev, message: "What is your purpose though?" }));
      error = 1;
    } else {
      setErrors((prev) => ({ ...prev, message: "" }));
    }

    if (error === 1) {
      setSendText("Say Hello");
      return;
    }

    try {
      setErrors({
        name: "",
        email: "",
        message: "",
      });

      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      let data;
      try {
        // Parse JSON only if there's content
        data = await res.json();
      } catch (err) {
        data = { error: "No response from server" };
      }
      if (res.ok) {
        toast.success("Email sent successfully!", {
          duration: 2000,
        });
      } else {
        console.log(data.error);
        toast.error(`${data.error}`, {
          duration: 2000,
        });
      }
    } catch (error) {
      toast.error("Internal Server Error", { duration: 2 });
      console.error("Error sending email:", error);
    } finally {
      setSendText("Say Hello");
    }
  };

  return (
    <div className="w-full">
      <Toaster position="top-center" richColors />
      {/* Landing Container */}
      <div className="h-[95vh] text-white border-b border-b-[#323a47] grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        <div className="order-2 sm:order-1 flex flex-col gap-3 justify-center items-center px-16">
          <div className="flex flex-col">
            <span className="text-gradient text-6xl sm:text-7xl">FULL STACK</span>
            <span className="text-gradient text-6xl sm:text-7xl">DEVELOPER</span>
          </div>
          <p className="text-2xl text-center mb-4">
            Hey there! I’m a full stack developer who loves working behind the scenes — mostly on
            the backend side of things. Love to create solid, scalable web apps.
          </p>
          <GlowButton scroll="#projects">My Work</GlowButton>
        </div>
        <div className="relative order-1 sm:order-2">
          <div className="w-[18rem] sm:w-[25rem] top-1/4 lg:top-[6rem] md:top-[30%] absolute right-1/4 md:right-1/3 aspect-10/12 h-fit">
            <img src="/profile.png"/>
            <div
              className="h-25 absolute w-full bottom-[-1px]"
              style={{
                backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0), rgba(17, 23, 35, 1))",
              }}
            ></div>
          </div>
          <div className="bg-circle absolute w-[25rem] translate-y-1/2 sm:translate-y-0 sm:w-[30rem] right-0 sm:right-[45%] bottom-0 md:bottom-[40%] lg:bottom-0 sm:translate-x-1/3 aspect-square"></div>
        </div>
      </div>
      {/* Skills */}
      <div
        id="skills"
        className="skills h-fit md:px-[13%] px-10 pt-10 pb-20 text-white flex flex-col items-center gap-8 relative border-b border-b-[#323a47]"
      >
        <div className="w-full">
          <p className="text-gradient text-4xl sm:text-5xl w-fit">SKILLS</p>
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
      {/* Projects */}
      <div
        id="projects"
        className="projects h-fit md:px-[13%] px-10 pt-10 pb-20 text-white flex flex-col items-center gap-8 relative border-b border-b-[#323a47]"
      >
        <div className="w-full">
          <p className="text-gradient text-4xl sm:text-5xl w-fit">PROJECTS</p>
        </div>
        <div className="w-full h-fit grid gap-6 p-10 sm:p-4 grid-cols-[repeat(auto-fill,minmax(200px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
          {projects.map((project) => (
            <Card handleShowModel={handleShowModel} {...project} key={project.id} />
          ))}
        </div>
      </div>
      {/* Contact */}
      <div
        id="contact"
        className="relative contact px-10 h-fit xl:h-screen grid grid-cols-1 sm:grid-cols-2"
      >
        <div className="flex flex-col p-10 lg:py-28 lg-px-20 gap-6 md:border-r">
          <div className="flex flex-col">
            <span className="text-gradient text-3xl w-fit">DO YOU HAVE A PROJECT</span>
            <span className="text-gradient text-3xl w-fit">TO DISCUSS?</span>
          </div>
          <div className="flex gap-6">
            <p className="text-white text-3xl">GET IN TOUCH</p>
            <Image src={MessageIcon} width={30} height={30} alt="Message Icon" />
          </div>
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-3">
            <div className="flex flex-col gap-3">
              <p className="text-white text-2xl">CONTACT</p>
              <a href="mailto:gmogesh2003@gmail.com" className="text-xl text-[#4579c9]">
                gmoges2003@gmail.com
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-white text-2xl">SOCIAL MEDIA</p>
              <div className="flex gap-3">
                <a href="https://in.linkedin.com/in/mogesh-g-660058231">
                  <Image src={LinkedIn} width={27} height={27} alt="Message Icon" />
                </a>
                <a href="https://www.instagram.com/m.o.g.e.s.h?igsh=MXdwN3VmMWdhcTJjMg==">
                  <Image src={InstagramIcon} width={27} height={27} alt="Message Icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="relative order-1 sm:order-2">
            <div className="bg-circle absolute w-[25rem] sm:translate-y-1/3 sm:w-[30rem] left-0 bottom-0 aspect-square"></div>
          </div>
        </div>
        <div className="flex-col flex p-10 lg:py-28 lg:px-20 gap-5">
          <p className="w-fit text-3xl text-white">CONTACT FORM</p>
          <form onSubmit={(event) => handleSubmit(event)}>
            <div className="flex flex-col gap-2 items-start mb-3">
              <label htmlFor="name" className="text-white text-xl">
                Name
              </label>
              <input
                name="name"
                id="name"
                className="bg-transparent rounded-xl border border-white outline-none w-full p-3 text-white"
                placeholder="Name"
              />
              {errors && errors.name && <span className="px-2 text-red-500">{errors.name}</span>}
            </div>
            <div className="flex flex-col gap-2 items-start mb-3">
              <label htmlFor="email" className="text-white text-xl">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="text"
                className="bg-transparent rounded-xl border border-white outline-none w-full p-3 text-white"
                placeholder="Email"
              />
              {errors && errors.email && <span className="px-2 text-red-500">{errors.email}</span>}
            </div>
            <div className="flex flex-col gap-2 items-start mb-3">
              <label htmlFor="message" className="text-white text-xl">
                Message
              </label>
              <input
                id="message"
                type="text"
                name="message"
                className="bg-transparent rounded-xl border border-white outline-none w-full p-3 text-white"
                placeholder="Message"
              />
              {errors && errors.message && (
                <span className="px-2 text-red-500">{errors.message}</span>
              )}
            </div>
            <div className="flex glow-button-border w-fit mt-10">
              <button type="submit" className="glow-button text-white">
                {sendText}
              </button>
            </div>
          </form>
        </div>
      </div>
      {showModel && (
        <Modal
          isOpen={showModel}
          // onAfterOpen={afterOpenModal}
          // onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          {/* <div className="bg-white p-6 rounded shadow-lg w-[60%]"> */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-gradient text-xl font-bold h-fit">{current?.name}</h2>

            <button onClick={() => setShowModel(false)}>
              <Image src={CloseSVG} width={30} height={30} alt="HTML Icon"></Image>
            </button>
          </div>
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: current?.longDescription || "" }}
          />
        </Modal>
      )}
    </div>
  );
};

export default page;

