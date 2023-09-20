'use client'
import React from 'react'
import {BiHomeAlt, BiUser} from 'react-icons/bi'
import {BsClipboardData, BsBriefcase, BsChatSquare} from 'react-icons/bs'
import { Link } from 'react-scroll'


export default function Nav() {
  return (
    <nav className='fixed bottom-5 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>

    <div className='w-full bg-white/20 h-[96px] backdrop-blur-2x1 rounded-full max-w-[460px] items-center mx-auto px-5 flex justify-between text-2xl text-white/50'>

      <Link to='home' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
      <BiHomeAlt/>
      </Link>

      <Link to='about' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
      <BiUser/>
      </Link>

      <Link to='skills' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
      <BsClipboardData/>
      </Link>

      <Link to='projects' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
      <BsBriefcase/>
      </Link>

      <Link to='contact' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
      <BsChatSquare/>
      </Link>


    </div>
      </div>

    </nav>
  )
}

