import React, { ReactNode } from "react";
import Image from "next/image";
import { CgChevronDoubleDown, CgProfile } from "react-icons/cg";
import { PiUserSwitch } from "react-icons/pi";
import { GrProjects } from "react-icons/gr";
import { FaTasks } from "react-icons/fa";
import { GiCargoCrane } from "react-icons/gi";
import Link from "next/link";

const SideNav = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <header className="w-[100vw] flex justify-end items-end bg-sky-950">
        <nav className="flex w-[83%] bg-sky-950 justify-between items-center py-4 ">
          {/* <Link
          href={"/"}
        >
          <span className="text-2xl font-sans border-sky-950 pl-[1rem]">
            <em className="text-3xl font-sans font-bold text-sky-700 ">M</em>
            anoica
          </span>
        </Link> */}
          <div className="w-1/2  px-5 h-10 flex justify-center" id="search">
            <input
              type="text"
              placeholder="search"
              className="w-full px-2 bg-white"
            />
          </div>
          <div
            id="userProfile"
            className="flex gap-2 justify-center items-center"
          >
            <Image
              src={"/images/heroimg.jpg"}
              alt="profile image"
              width={30}
              height={30}
              className="rounded-xl w-10 h-10"
            />
            <ul>
              <li className="text-white text-sm font-sans">Luke Anastasia</li>
              <li className="text-white text-xs font-sans">
                Managing director
              </li>
            </ul>
            <CgChevronDoubleDown className="text-md text-white" />
          </div>
        </nav>
      </header>
      <section className="w-full flex flex-row justify-between items-center">
        <div className="w-1/6 flex flex-col space-y-10 justify-start items-center gap-5 bg-sky-950 h-screen py-10">
          <Link
            href={"/dashboard/profile"}
            className=" gap-5 flex place-content-center items-center"
          >
            <CgProfile className="w-10 h-10 text-white" />

            <span className="w-10 h-10 font-bold text-lg text-white">
              Profile
            </span>
          </Link>
          <Link
            href={"/dashboard/users"}
            className="  gap-5 flex place-content-center items-center"
          >
            <PiUserSwitch className="w-10 h-10 text-white" />

            <span className="w-10 h-10 font-bold text-lg text-white">
              Users
            </span>
          </Link>
          <Link
            href={"/dashboard/supplies"}
            className=" gap-5 flex place-content-center items-center"
          >
            <GiCargoCrane className="w-10 h-10 text-white" />

            <span className="w-10 h-10 font-bold text-lg text-white">
              supplies
            </span>
          </Link>
          <Link
            href={"/dashboard/project"}
            className=" gap-5 flex place-content-center items-center"
          >
            <GrProjects className="w-10 h-10 text-white" />

            <span className="w-10 h-10 font-bold text-lg text-white">
              Projects
            </span>
          </Link>
          <Link
            href={"/dashboard/task"}
            className=" gap-5 flex place-content-center items-center"
          >
            <FaTasks className="w-10 h-10 text-white" />

            <span className="w-10 h-10 font-bold text-lg text-white">
              Tasks
            </span>
          </Link>
        </div>
        <div className="w-3/4">{children}</div>
      </section>
    </main>
  );
};

export default SideNav;
