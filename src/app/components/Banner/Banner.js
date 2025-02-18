"use client";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import ImagenD from "../../utils/assets/IMG_23.jpg";
import Image from "next/image";

export default function Banner() {
  return (
    <section
      id="home"
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center pb-20 lg:px-4 xl:px-28 xxl:px-36 xxxl:px-48"
    >
      <div className="container mx-auto">
        <div className="">
          <div className="flex flex-col items-center text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-2 text-[1.8rem] font-bold leading-[0.8] lg:text-[3.6rem]"
            >
              Douglas <span>Rondon</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[1.4rem] lg:text-[2rem] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="mr-2">I am developer</span>
              <TypeAnimation
                sequence={["Fronted.", 2000, "Backend.", 2000, "FullStack.", 2000]}
                speed={50}
                className="text-green"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="mb-8 max-w-lg mx-auto xl:mx-0 p"
            >
              Desarrollador full stack orientado al diseño frontend apasionado
              por la programación con experiencia en desarrollo web.
            </motion.p>

            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="flex max-w-max gap-x-2 items-center mb-6 mx-auto xl:mx-0"
            >
              <a href="https://www.linkedin.com/in/douglasgrl27" className="btn btn-lg flex items-center" target="_blank">Contáctame</a>

              <a href='/Cv-Douglas.pdf' download className="btn btn-lg flex items-center">
                Descargar Cv
              </a>
            </motion.div>

            <motion.div variants={fadeIn("up", 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.7}} className="flex items-center text-[2rem] gap-x-6 max-w-max mx-auto xl:mx-0">
              <a href="https://github.com/Douglasgrl" target="_blank">
                <FaGithub />
              </a>

              <a href="https://www.linkedin.com/in/douglasgrl27" target="_blank">
                <FaLinkedin />
              </a>
            </motion.div>
          </div>

          {/* <motion.div variants={fadeIn("down", 0.5)}
              initial='hidden'
              whileInView={'show'}
              className="rounded-full hidden lg:flex flex-1 max-w-[320px] lg:max-w-[350px] xl:max-w-[450px] xl:justify-center xxl:max-w-[482px]">
            <Image
              className="rounded-[8rem] h-[15rem] w-[18rem] xl:h-[18rem] xl:w-[20rem] xl:rounded-[10rem] xxl:h-[21.5rem] xxl:w-[23rem] xxl:rounded-[15rem]"
              src={ImagenD}
              alt="image"
              width={400}
              height={400}
            />
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
