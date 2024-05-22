"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { Link } from "react-scroll";

const experiences = [
  {
    name: "SoyHenry Bootcamp - 2023",
    description:
      "Completé el bootcamp de SoyHenry, donde adquirí habilidades como Full Stack Developer.",
  },
  {
    name: "Hyper Events - 2023",
    description:
      "Estuve trabajando como desarrollador Frontend en este proyecto, estuve a cargo del diseño, desarrollo y mantenimiento de la interfaz web.",
  },
  {
    name: "Teaching Assitant - 2023",
    description:
      "He estado trabajando como Asistente de Docenc (TA), mi rol como coordinador se centró en asegurar el éxito académico y personal de los estudiantes.",
  },
  {
    name: "Maylands Labs - 2024",
    description:
      "Desarrollo y mantengo interfaces atractivas y funcionales, utilizando React, TypeScript y Tailwind CSS.",
  },
];

export default function Experiencies() {
  return (
    <section id="skills" className="section lg:pb-40">
      <div className="container mx-auto px-6 xxxl:px-48">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
          >
            <h2 className="h2 text-green mb-6">EXPERIENCIAS.</h2>
            <p className="p max-w-[455px]">
              Soy un programador full Stack con experiencia en desarrollo web.
            </p>

            <button className="btn btn-sm mt-5 mb-6">
              <Link to="projects" smooth={true} spy={true}>
                Ver mis trabajos
              </Link>
            </button>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              {experiences.map((exp, index) => {
                return (
                  <div
                    className="border-b border-green h-[152px] mb-[38px] lg:mb-[20px] lg:w-[95%] lg:h-[110px] flex"
                    key={index}
                  >
                    <div className="max-w-[800px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-3">
                        {exp.name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
