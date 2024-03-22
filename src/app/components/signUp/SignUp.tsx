"use client";
import React, { useState } from "react";
import { Field, Formik } from "formik";
import { validationSchema } from "./helper";
import CustomInput from "../customInput/customInput";
type UserEntityProps = {
  fullname: string;
  email: string;
  contact: string;
  userType: string;
  password: string;
  confirmPassword: string;
};
const SignUp = () => {
  const [formData, setFormData] = useState<UserEntityProps>();

  const handleOnSubmit = (values: UserEntityProps) => {
    setFormData(values);
    console.log(JSON.stringify(values));
  };

  return (
    <div className="w-100% h-[100vh] flex justify-center items-center bg-orange-50 from-slate-600 to-orange-400">
      <div className="w-[70vw] h-[80vh] flex">
        <div
          className="w-1/2 bg-cyan-600 max-h-full bg-no-repeat bg-cover"
          style={{
            background: `url(/images/img2.jpg)`,
          }}
        >
          <span className="text-2xl font-sans border-sky-950 pl-[1rem]">
            <em className="text-3xl font-sans font-bold text-sky-700 ">M</em>
            anoica
          </span>
        </div>
        <div className="w-1/2 border-2  px-[50px] flex flex-col gap-2 justify-center items-center text-white max-h-full">
          <Formik
            validationSchema={validationSchema}
            initialValues={{
              fullname: "",
              email: "",
              contact: "",
              userType: "",
              password: "",
              confirmPassword: "",
            }}
            onSubmit={(values) => handleOnSubmit(values)}
          >
            {({ handleSubmit, setFieldValue, isValid }) => (
              <>
                <Field
                  component={CustomInput}
                  name="fullname"
                  type="text"
                  placeholder="full Name"
                />
                <Field
                  component={CustomInput}
                  name="email"
                  type="email"
                  placeholder="email@gmail.com"
                />
                <Field
                  component={CustomInput}
                  name="contact"
                  type="text"
                  placeholder="(+237) 675832765"
                />
                <Field
                  component={CustomInput}
                  name="password"
                  type="password"
                  placeholder="password"
                />
                <Field
                  component={CustomInput}
                  name="confirmPassword"
                  type="password"
                  placeholder="confirmPassword"
                />
                <div
                  className="rounded-md flex gap-4 border border-gray-200 bg-white px-[14px] py-3"
                  role="group"
                  aria-labelledby="my-radio-group"
                >
                  <label className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600">
                    <Field
                      type="radio"
                      name="userType"
                      value="HW"
                      onChange={() => setFieldValue("userType", "HW")}
                    />
                    House Owner
                  </label>
                  <label className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600">
                    <Field
                      type="radio"
                      name="userType"
                      value="SP"
                      onChange={() => setFieldValue("userType", "SP")}
                    />
                    Supplier
                  </label>
                  <label className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600">
                    <Field
                      type="radio"
                      name="userType"
                      value="TC"
                      onChange={() => setFieldValue("userType", "TC")}
                    />
                    Technician
                  </label>
                </div>
                <button
                  type="submit"
                  onClick={() => handleSubmit()}
                  className="ring-2  cursor-pointer flex justify-center items-center bg-sky-600 mt-5 text-2xl font-bold  text-white rounded-md w-full p-3"
                >
                  Submit
                </button>
              </>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
