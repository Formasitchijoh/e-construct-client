"use client";
import React from "react";

const SignUp = () => {
  return (
    <div className="w-100% h-[100vh] flex justify-center items-center bg-orange-50 from-slate-600 to-orange-400">
      <div className="w-[70vw] h-[80vh] flex">
        <div
          className="w-1/2 bg-cyan-600 max-h-full bg-no-repeat"
          style={{
            background: `url(/images/img2.jpg)`,
          }}
        >
          <span className="text-2xl font-sans border-sky-950 pl-[1rem]">
            <em className="text-3xl font-sans font-bold text-sky-700 ">M</em>
            anoica
          </span>
        </div>
        <form
          action=""
          className="w-1/2 px-[50px] flex flex-col gap-2 justify-center items-center text-white bg-sky-950  max-h-full"
        >
          <h1 className="text-4xl font-bold">
            Welcome to <br />{" "}
            <em className="text-6xl text-sky-500 font-bold">e-Construct</em>{" "}
          </h1>
          <span className="font-bold mt-5 text-md">SignUp</span>
          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            className="ring-2  rounded-md w-full p-3"
          />
          <input
            type="email"
            name="email"
            placeholder="youremail@gmail.com"
            className="ring-2  rounded-md w-full p-3"
          />
          <select
            className="ring-2  rounded-md w-full p-3"
            name="location"
            id="location"
          >
            <option value="location1 ">location1</option>
            <option value="location2 ">location2</option>
            <option value="location2 ">location3</option>
          </select>
          <input
            type="phone"
            name="contact"
            placeholder=""
            className="ring-2  rounded-md w-full p-3"
          />
          <fieldset className="w-full">
            <legend className="font-bold mt-3 text-md">SignUp As</legend>
            <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
              <div className="flex gap-3">
                <div className="flex items-center">
                  <input
                    id="pending"
                    name="status"
                    type="radio"
                    value="pending"
                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  />
                  <label
                    htmlFor="pending"
                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600"
                  >
                    House Owner
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="paid"
                    name="status"
                    type="radio"
                    value="paid"
                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  />
                  <label
                    htmlFor="paid"
                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-sky-500 px-3 py-1.5 text-xs font-medium text-white"
                  >
                    Supplier
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="paid"
                    name="status"
                    type="radio"
                    value="paid"
                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  />
                  <label
                    htmlFor="paid"
                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-sky-500 px-3 py-1.5 text-xs font-medium text-white"
                  >
                    Technician
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
          {/* <select onSelect={(e)=> console.log(e.currentTarget)
        } className='ring-2  rounded-md w-full p-3' name="specialties" id="specialties">
            <option value="specialty1 ">specialty1</option>
            <option value="specialty2 ">specialty2</option>
            <option value="specialty3 ">specialty3</option>
        </select> */}

          <button className="ring-2  cursor-pointer flex justify-center items-center bg-sky-600 mt-5 text-2xl font-bold  text-white rounded-md w-full p-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
