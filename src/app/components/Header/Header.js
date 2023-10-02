"use client"

import React from "react";
import {Link} from "react-scroll";

export default function Header() {
  return (
    <header className="py-8 lg:px-8 xl:px-28 xxl:px-36 xxxl:px-48">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <p className="p">Douglas <span className="text-green">Rondon</span></p>
          </a>
          <Link to="contact" className="btn btn-sm flex items-center cursor-pointer" activeClass='active' smooth={true} spy={true}>Contáctame</Link>
        </div>
      </div>
    </header>
  );
}
