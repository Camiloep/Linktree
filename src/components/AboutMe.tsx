"use client";
import React from "react";
import { ReactTyped } from "react-typed";

const AboutMe: React.FC = () => (
  <ReactTyped
    strings={[
      "¡Hola!",
      "Mi nombre es Camilo Estrada Patiño",
      "Desarrollador FullStack",
      "Colombia 🇨🇴",
    ]}
    typeSpeed={60}
    backDelay={1100}
    backSpeed={20}
    className="text-3xl font-bold"
    loop
  />
);

export default AboutMe;
