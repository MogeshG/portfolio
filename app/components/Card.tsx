import React from "react";
import { projectType } from "../constants/projects";
import Image from "next/image";
import LinkIcon from "@/public/link.svg";

const Card = ({ id, name, description, image, url }: projectType) => {
  return (
    <div
      className="bg-[#0c182e] shadow-[1px_1px_7px_#939393]
 min-w-40 max-w-[28rem] aspect-8/9 rounded-xl flex flex-col overflow-hidden border border-[#5a5a5a]"
    >
      <Image src={image} width={20} height={20} alt={name} className="w-full h-[70%] rounded-xl" />
      <div className="relative flex flex-col h-full justify-center gap-1 px-4">
        <p className="w-full text-[#f0f0f0] text-center text-2xl font-semibold">{name}</p>
        <span className="w-full text-[#939393] text-center">{description}</span>
        <a href={url}>
          <Image
            src={LinkIcon}
            width={20}
            height={20}
            alt={name}
            className="absolute top-2 right-2"
          />
        </a>
      </div>
    </div>
  );
};

export default Card;
