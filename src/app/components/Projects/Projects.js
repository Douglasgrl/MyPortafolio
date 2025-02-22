"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import ImageHyper from "../../utils/assets/padelink.png";
import ImagePortafolio from "../../utils/assets/Screenshot_4.png";
import ImageArgencompras from "@/app/utils/assets/image_argencompras.png"
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container mx-auto px-6 xxl:px-56 lg:mb-20">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-[3.7rem] mb-5 lg:mb-0 xl:gap-y-[.2rem] xxxl:gap-y-[2.9rem]"
          >
            <div>
              <h2 className="h2 leading-tight text-green">
                Mis Últimos <br />
                Trabajos
              </h2>
              <p className="p max-w-sm xxl:mb-10">
                Aca les muestro un poco de los proyectos en los que he venido
                trabajando.
              </p>
            </div>

            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl max-w-[500px] max-h-[550px]">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>

              <Image
                className="group-hover:scale-125 transition-all duration-500 w-full"
                src={ImageArgencompras}
                width={400}
                height={400}
                alt="HyperEvents"
              />
              <div className="absolute -bottom-full left-8 group-hover:bottom-10 transition-all duration-500 z-50">
                <span className="font-secondary text-[1.5rem] font-semibold">
                  Fronted
                </span>
              </div>

              <div className="absolute -bottom-full left-8 group-hover:bottom-5 transition-all duration-700 z-50">
                <span className="p text-white">ArgenCompras</span>
              </div>

              <div className="absolute -top-full right-6 group-hover:top-[1rem] transition-all duration-700 z-50">
                <a
                  href="https://ecommerce.maylandlabs.com/"
                  target="_blank"
                  className="p text-white hover:text-white/70"
                >
                  Ver mas +
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10 max-w-[500px] max-h-[550px]"
          >
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>

              <Image
                className="group-hover:scale-125 transition-all duration-500 w-full"
                src={ImageHyper}
                width={400}
                height={400}
                alt="HyperEvents"
              />
              <div className="absolute -bottom-full left-8 group-hover:bottom-10 transition-all duration-500 z-50">
                <span className="font-secondary text-[1.5rem] font-semibold">
                  Fronted
                </span>
              </div>

              <div className="absolute -bottom-full left-8 group-hover:bottom-5 transition-all duration-700 z-50">
                <span className="p text-white">Padelink</span>
              </div>

              <div className="absolute -top-full right-6 group-hover:top-[1rem] transition-all duration-700 z-50">
                <a
                  href="https://padelink.com.ar/"
                  target="_blank"
                  className="p text-white hover:text-white/70"
                >
                  Ver mas +
                </a>
              </div>
            </div>

            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>

              <Image
                className="group-hover:scale-125 transition-all duration-500 w-full"
                src={ImagePortafolio}
                width={400}
                height={400}
                alt="HyperEvents"
              />
              <div className="absolute -bottom-full left-8 group-hover:bottom-10 transition-all duration-500 z-50">
                <span className="font-secondary text-[1.5rem] font-semibold">
                  Fronted
                </span>
              </div>

              <div className="absolute -bottom-full left-8 group-hover:bottom-5 transition-all duration-700 z-50">
                <span className="p text-white">
                  Aquí podrás visualizar mis proyectos.
                </span>
              </div>

              <div className="absolute -top-full right-6 group-hover:top-[1rem] transition-all duration-700 z-50">
                <Link href="/view-more">Ver mas +</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
