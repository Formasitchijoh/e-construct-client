"use client";
import Image from "next/image";
import React, { useState } from "react";
export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-[100vw] shadow sticky bg-white">
      <nav className="w-[100%] md:w-[90%] mx-auto flex flex-row justify-between items-center  py-[1rem]  relative">
        <span className="text-2xl font-sans border-sky-950 pl-[1rem]">
          <em className="text-3xl font-sans font-bold text-sky-700 ">M</em>
          anoica
        </span>
        <div
          className="flex md:hidden pr-[10px] flex-col justify-between items-center w-8 h-5 gap-1"
          onClick={() => setShowMenu(!showMenu)}
        >
          <div className="w-full h-[3px] bg-sky-950 rounded-sm"></div>
          <div className="w-full h-[3px] bg-sky-950 rounded-sm"></div>
          <div className="w-full h-[3px] bg-sky-950 rounded-sm"></div>
        </div>

        <div
          className={`md:flex flex-col ${showMenu ? "flex" : "hidden"}  p-6 md:flex-row w-full mt-10 justify-between  items-start md:items-center absolute md:relative z-50 top-1/2 md:mt-0`}
        >
          <ul className="flex flex-col  w-full md:justify-center md:items-center items-start gap-2 md:flex-row list-none">
            <li>
              <a href="#" className="text-lg text-slate-900 ">
                Products
              </a>
            </li>
            <div className="w-[2px] h-[4vh] hidden md:flex mx-5 bg-slate-500 rounded-sm"></div>
            <li>
              <a href="#" className="text-lg text-slate-900 ">
                Technicians
              </a>
            </li>
            <div className="w-[2px] h-[4vh] mx-5 hidden md:flex bg-slate-500 rounded-sm"></div>
            <li>
              <a href="#" className="text-lg text-slate-900 ">
                Distributors
              </a>
            </li>
            <div className="w-[2px] h-[4vh] mx-5 hidden md:flex bg-slate-500 rounded-sm"></div>
            <li>
              <a href="#" className="text-lg text-slate-900 ">
                House Plan
              </a>
            </li>
            <div className="w-[2px] h-[4vh] mx-5 hidden md:flex bg-slate-500 rounded-sm"></div>
            <li>
              <a href="#" className="text-lg text-slate-900 ">
                Blogs
              </a>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex  flex-row justify-center items-center gap-2">
          <span className="text-lg text-sky-950 font-bold">Augustus</span>
          <Image
            alt=""
            width={500}
            height={200}
            src="/images/douala.jpg"
            className="w-8 h-8 rounded-full"
          />
        </div>
        {/* <div className=' hidden md:flex flex-row justify-center items-center gap-2'>
       <button className='text-lg  border-2  border-sky-950 px-[2rem] py-[0.5rem] bg-white rounded-lg  font-bold'>SignUp</button>
        <button className='text-lg  border-2 bg-sky-950 px-[2rem] py-[0.5rem] rounded-lg text-white font-bold'>Login</button>
       </div> */}
      </nav>
    </div>
  );
};
