"use client";
import React from "react";
import { scrollToDiv } from "./Header";

const GlowButton = ({ scroll, children }: { children: string; scroll: string }) => {
  return (
    <div className="glow-button-border">
      <button className="glow-button" onClick={() => scrollToDiv(scroll)}>
        {children}
      </button>
    </div>
  );
};

export default GlowButton;
