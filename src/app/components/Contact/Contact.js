"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

export default function Contact() {
  return (
    <div id="contact" className="section px-6 py-16 lg:section xxl:px-36 xxxl:px-48">
      <div className="container mx-auto">
        <div className="flex flex-col mb-20 lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase font-primary text-green font-medium mb-2 tracking-wide">
                Ponerse en contacto
              </h4>
              <h2 className="text-[40px] lg:text-[80px] leading-none mb-12">
              ¡Trabajemos  <br /> juntos!
              </h2>
            </div>
          </motion.div>

          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-10 p-6 items-start"
          >
            <label className="w-[100%] pt-3"><span className="font-primary text-[1.4rem]">Nombre
              </span>
            <input
              className="font-secondary pt-1 pb-1 bg-transparent border-b outline-none w-full placeholder:text-white focus:border-green transition-all"
              placeholder="Ingrese su nombre"
              type="text"
              ></input>
              </label>

              <label className="w-[100%] pt-3"><span className="font-primary text-[1.4rem]">Correo electrónico
              </span>
            <input
              className="font-secondary pt-1 pb-1 bg-transparent border-b outline-none w-full placeholder:text-white focus:border-green transition-all"
              placeholder="Ingrese su correo electrónico"
              type="text"
            ></input>
            </label>

            <label className="w-[100%] pt-3"><span className="font-primary text-[1.4rem]">Mensaje
              </span>
            <textarea
              className="font-secondary pt-1 bg-transparent border-b py-4 outline-none w-full placeholder:text-white focus:border-green transition-all resize-none mb-6"
              placeholder="Ingrese su mensaje"
            ></textarea>
            </label>

            <button className="btn btn-lg">Enviar mensaje</button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
