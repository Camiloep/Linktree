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
      "Me enfoco en el Front-end"
    ]}
    typeSpeed={80}
    backDelay={1100}
    backSpeed={30}
    className="text-3xl font-bold"
    loop
  />
  );
};

export default AboutMe;
