"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import {
  IconJavaScript,
  IconHtml,
  IconCss,
  IconRedux,
  IconNext,
  IconTailwind,
  IconNode,
  IconSql,
  IconGit,
} from "@/app/utils/svg/svg";

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const iconos = [
      { icon: <IconHtml /> },
      { icon: <IconCss /> },
      { icon: <IconJavaScript /> },
      { icon: <IconNext /> },
      { icon: <IconRedux /> },
      { icon: <IconTailwind /> },
      { icon: <IconNode /> },
      { icon: <IconSql /> },
      { icon: <IconGit /> },
    ];


  return (
    <section
      id="about"
      className="section lg:px-4 lg:pt-96 xl:pt-20 lg:mx-auto xl:px-16 xxl:px-36 xxxl:px-48"
      ref={ref}
    >
      <div className="container mx-auto flex px-6">
        <div className="flex flex-col gap-y-10 mb-40 lg:flex-row lg:gap-y-0 h-screen xl:items-center xl:gap-12 xl:mb-20">
          <div className="xl:flex-1 lg:w-[50rem]">
            <motion.h2
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="h2 text-green"
            >
              Acerca de mí.
            </motion.h2>
            <motion.h3
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="mb-4 p"
            >
              Soy un apasionado desarrollador full stack con enfoque en el
              diseño frontend. Disfruto resolviendo problemas y enfrentando
              nuevos retos en el mundo del desarrollo web. Siempre estoy ansioso
              por aprender nuevas tecnologías y mantenerme actualizado en las
              últimas tendencias.
            </motion.h3>

            <div className="flex gap-x-2 items-center text-center">
              <motion.a
              href="https://www.linkedin.com/in/douglasgrl27"
              target="_blank"
                variants={fadeIn("right", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="btn btn-lg flex items-center"
              >
                Contáctame
              </motion.a>
              <motion.a
                href='/Cv-Douglas.pdf' download
                variants={fadeIn("right", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="btn btn-lg flex items-center"
              >
                Descargar CV
              </motion.a>
            </div>
          </div>
          <div className="lg:w-[50%] lg:text-center xl:text-center">
            <motion.h2  variants={fadeIn("left", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="h2 text-green">Habilidades.</motion.h2>
            <div
              className="flex flex-row justify-center 
            flex-wrap gap-5 lg:mx-auto"
            >
              {iconos && iconos.map((item, index) => {
                console.log(index)
                return (
                  <motion.div
                  variants={fadeIn("left", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.3 }}
                    className="flex items-center justify-center shadow-lg h-[5rem] w-[5rem] bg-slate-50 rounded-md md:h-[5.7rem] md:w-[5.7rem] lg:h-[6rem] lg:w-[6rem]"
                    key={index}
                  >
                    {item.icon}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
