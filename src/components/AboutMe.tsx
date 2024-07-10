"use client";
import React from "react";
import { ReactTyped } from "react-typed";

const AboutMe: React.FC = () => {
  return (
<ReactTyped
    strings={[
      "¡Hola!",
      "Mi nombre es Camilo Estrada Patiño",
      "Soy aprendiz de desarrollo de software",
      "Desarrollador Front-end"
    ]}
    typeSpeed={60}
    backDelay={1100}
    backSpeed={20}
    className="text-3xl font-bold"
    loop
  />
  );
};

export default AboutMe;
