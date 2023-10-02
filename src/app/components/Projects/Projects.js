'use client'
import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn } from '../../variants'
import ImagePi from '../../utils/assets/Screenshot_1.png'
import ImageHyper from '../../utils/assets/HyperEvents.png'
import ImagePortafolio from '../../utils/assets/Portafolio.png'
import Image from 'next/image'

export default function Projects() {
  return (
    <section id='projects' className='section'>
      <div className='container mx-auto xxl:px-56 lg:mb-20'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div variants={fadeIn("right", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }} className='flex-1 flex flex-col gap-y-12 mb-5 lg:mb-0'>

            <div>
              <h2 className='h2 leading-tight text-green'>Mis Últimos <br/> 
              Trabajos
              </h2>
              <p className='p max-w-sm xxl:mb-10'>Aca les muestro un poco de los proyectos en los que he venido trabajando.</p>
            </div>

            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl max-w-[500px] max-h-[550px]'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>

              <Image className='group-hover:scale-125 transition-all duration-500 w-full' src={ImageHyper} width={400} height={400} alt='HyperEvents'/>
              <div className='absolute -bottom-full left-8 group-hover:bottom-10 transition-all duration-500 z-50'>
                <span className='font-secondary text-[1.5rem] font-semibold'>Fronted</span>
              </div>

              <div className='absolute -bottom-full left-8 group-hover:bottom-5 transition-all duration-700 z-50'>
                <span className='p text-white'>Hyper Events</span>
              </div>
            </div>


          </motion.div>

          <motion.div
                variants={fadeIn("left", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
           className='flex-1 flex flex-col gap-y-10 max-w-[500px] max-h-[550px]'>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>

              <Image className='group-hover:scale-125 transition-all duration-500 w-full' src={ImagePi} width={400} height={400} alt='HyperEvents'/>
              <div className='absolute -bottom-full left-8 group-hover:bottom-10 transition-all duration-500 z-50'>
                <span className='font-secondary text-[1.5rem] font-semibold'>Fronted/Backend</span>
              </div>

              <div className='absolute -bottom-full left-8 group-hover:bottom-5 transition-all duration-700 z-50'>
                <span className='p text-white'>Dogs Api</span>
              </div>
            </div>

            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>

              <Image className='group-hover:scale-125 transition-all duration-500 w-full' src={ImagePortafolio} width={400} height={400} alt='HyperEvents'/>
              <div className='absolute -bottom-full left-8 group-hover:bottom-10 transition-all duration-500 z-50'>
                <span className='font-secondary text-[1.5rem] font-semibold'>Fronted</span>
              </div>

              <div className='absolute -bottom-full left-8 group-hover:bottom-5 transition-all duration-700 z-50'>
                <span className='p text-white'>Portafolio Personal</span>
              </div>
            </div>

            
          </motion.div>
        </div>
      </div>  
    </section>
  )
}
