import React from "react";
import { MaterialType } from "../../types/CommonTypes";
import douala from "../../utils/images/douala.jpg";
import styles from "./product.module.css";
import Image from "next/image";

export const Material = ({ image }: { image: string }) => {
  return (
    <div className="flex flex-col border-2 rounded-lg  justify-center items-center ">
      <Image
        src={image}
        alt="logo"
        className="w-full h-[22vh]"
        width={500}
        height={200}
      />
      <div className=" flex flex-col justify-start items-start py-4 gap-2 px-4 ">
        <h1 className="text-2xl font-bold" style={{ color: "#44425A" }}>
          Metal
        </h1>
        <p className="text-md  font-sans" style={{ color: "#44425A" }}>
          This is a material used for constructing stable and flexible
          architecture for
        </p>
        <span className="text-2xl font-bold " style={{ color: "#44425A" }}>
          XAF : 6000/kg
        </span>
        <div className="flex  w-full flex-row justify-end items-end ">
          <div className="flex my-6  flex-row justify-center items-center gap-2">
            <h1
              className="text-md font-bold text-sky-500"
              style={{ fontWeight: "bold" }}
            >
              View More
            </h1>
            <div className="w-10 h-[3px] rounded-sm  bg-sky-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
