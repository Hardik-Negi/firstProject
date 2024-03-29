import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { useFormik } from "formik";
import Navbar from "./Navbar";
import { basicSchemas } from "../schemas";
import "../file.css";

const Form = () => {
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: {
        admin: "",
        password: "",
        date: "",
        number: "",
        num: "",
        admintype: "",
        status: "",
        fname: "",
        lname: "",
        email: "",
        address: "",
        town: "",
        city: "",
        nokPh: "",
        nokadd: "",
      },
      onSubmit: (values) => {
        console.log("form is submit", values);
      },
      validationSchema: basicSchemas,
    });
  console.log("errors", errors);
  const [imagePath, setImagePath] = useState("");

  return (
    <div className="flex ">
      <Sidebar />
      <div
        className="w-screen h-screen "
        style={{ overflow: "scroll-y", overflowX: "hidden" }}
      >
        {/* <Navbar/> */}
        <form className=" p-10  " onSubmit={handleSubmit}>
          <div className="flex gap-[9%]">
            <div className=" flex flex-col">
              <div className=" flex w-[100%] ">
                <label className="font-bold my-2 w-[200px] " htmlFor="admin">
                  {" "}
                  Admin Type :{" "}
                </label>
                <input
                  disabled={true}
                  className=" w-full py-2 px-4 font-medium bg-white border border-[#C1C1C1] rounded-2xl mb-6 "
                  type="text"
                  name="admin"
                  id="admin"
                  onChange={handleChange}
                  value={values.admin}
                  onBlur={handleBlur}
                  placeholder="Normal Admin (Default)"
                />
              </div>
              <div className="flex  w-[828px]">
                <label className="font-bold my-2  w-[200px]" htmlFor="password">
                  {" "}
                  Password :{" "}
                </label>

                <input
                  className=" w-full  py-2 px-4 font-medium bg-white border border-solid rounded-2xl mb-6  "
                  type="password"
                  name="password"
                  id="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  style={{
                    borderColor:
                      errors.password && touched.password ? "red" : "#C1C1C1",
                    outline: "none",
                  }}
                />
              </div>
              <div className="flex w-[828px] ">
                <label className="font-bold my-2  w-[200px]" htmlFor="date">
                  Date joined :{" "}
                </label>
                <input
                  className=" w-full py-2 px-4 font-medium bg-white border border-[#C1C1C1] rounded-2xl mb-6 "
                  disabled={true}
                  type="text"
                  name="date"
                  id="date"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.date}
                  placeholder="24/03/2024"
                />
              </div>
            </div>
            <div className=" w-[150px] h-[150px] relative ">
              <input
                type="file"
                accept="image/jpeg,image/png"
                className=" absolute object-center  z-[2] w-full h-full opacity-0 "
                onChange={(element) => {
                  console.log(element.value);
                  const file = element.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setImagePath(reader.result);
                    };
                    reader.readAsDataURL(file);
                  }
                }}
              />
              <img
                className="object-contain h-full w-full absolute object-center  z-[1]"
                src={imagePath || "src/assets/vector11.png"}
              />
            </div>
          </div>
          <div className="flex">
            <label className="font-bold  my-2  w-[200px]" htmlFor="number">
              {" "}
              Phone No:{" "}
            </label>
            <input
              className=" w-[80px] mr-[10px] py-2 px-4 font-medium bg-white border border-[#C1C1C1] rounded-2xl mb-6 "
              disabled={true}
              type="text"
              name="number"
              id="number"
              placeholder="+91"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.number}
            />
            <input
              className=" w-[90%]  py-2 px-4 font-medium bg-white border border-[#C1C1C1] rounded-2xl mb-6 "
              type="text"
              name="num"
              id="num"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.num}
              style={{
                borderColor: errors.num && touched.num ? "red" : "#C1C1C1",
                outline: "none",
              }}
            />
          </div>

          <div className="flex ">
            <label className="font-bold  my-2  w-[200px]" htmlFor="status">
              {" "}
              Status :{" "}
            </label>
            <input
              disabled={true}
              className="   w-full py-2 px-4 font-medium bg-white border border-[#C1C1C1] rounded-2xl mb-6 "
              type="text"
              name="status"
              id="status"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.status}
              placeholder="Active"
            />
          </div>
          <div className="flex gap-[2%] ">
            <label className="font-bold  my-2 w-[160px]" htmlFor="fname">
              {" "}
              First Name :{" "}
            </label>
            <input
              className=" w-[40%]  py-2 px-4 font-medium bg-white border border-solid rounded-2xl mb-6 "
              type="text"
              name="fname"
              id="fname"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.fname}
              style={{
                borderColor: errors.fname && touched.fname ? "red" : "#C1C1C1",
                outline: "none",
              }}
            />
            <label className="font-bold  my-2 w-[100px]" htmlFor="lname">
              {" "}
              Last Name :{" "}
            </label>
            <input
              className="  w-[40%] py-2 px-4 font-medium bg-white border border-solid rounded-2xl mb-6 "
              type="text"
              name="lname"
              id="lname"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lname}
              style={{
                borderColor: errors.lname && touched.lname ? "red" : "#C1C1C1",
                outline: "none",
              }}
            />
          </div>

          <div className="flex ">
            <label className="font-bold  my-2 w-[200px]" htmlFor="email">
              {" "}
              Email Address :{" "}
            </label>
            <input
              className="  w-full   py-2 px-4 font-medium bg-white border border-solid rounded-2xl mb-6 "
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              style={{
                borderColor: errors.email && touched.email ? "red" : "#C1C1C1",
                outline: "none",
              }}
            />
          </div>
          <div className="flex ">
            <label className="font-bold  my-2 w-[200px]" htmlFor="address">
              {" "}
              Residential Address :{" "}
            </label>
            <input
              className="  w-full px-4 py-2 font-medium bg-white border border-solid rounded-2xl mb-6 "
              type="text"
              name="address"
              id="address"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.address}
              style={{
                borderColor:
                  errors.address && touched.address ? "red" : "#C1C1C1",
                outline: "none",
              }}
            />
          </div>
          <div className="flex ">
            <label className="font-bold  mb-2 w-[200px]" htmlFor="town">
              {" "}
              Town :{" "}
            </label>
            <input
              className="  w-full px-4  py-2 font-medium bg-white border border-solid rounded-2xl mb-6 "
              type="text"
              name="town"
              id="town"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.town}
              style={{
                borderColor: errors.town && touched.town ? "red" : "#C1C1C1",
                outline: "none",
              }}
            />
          </div>
          <div className="flex ">
            <label className="font-bold  my-2 w-[200px]" htmlFor="city">
              Barangay :{" "}
            </label>
            <input
              className="  w-full px-4  py-2 font-medium bg-white border border-solid rounded-2xl mb-6 "
              type="text"
              name="city"
              id="city"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.city}
              style={{
                borderColor: errors.city && touched.city ? "red" : "#C1C1C1",
                outline: "none",
              }}
            />
          </div>
          <div className="flex ">
            <label className="font-bold  my-2 w-[200px]" htmlFor="nokPh">
              Nok Phone :{" "}
            </label>
            <input
              className="  w-full px-4  py-2 font-medium bg-white border border-solid rounded-2xl mb-6 "
              type="text"
              name="nokPh"
              id="nokPh"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.nokPh}
              style={{
                borderColor: errors.nokPh && touched.nokPh ? "red" : "#C1C1C1",
                outline: "none",
              }}
            />
          </div>
          <div className="flex ">
            <label className="font-bold  my-2 w-[200px]" htmlFor="nokadd">
              Nok Address :{" "}
            </label>
            <input
              className="  w-full px-4  py-2 font-medium bg-white border border-solid rounded-2xl mb-6 "
              type="text"
              name="nokadd"
              id="nokadd"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.nokadd}
              style={{
                borderColor:
                  errors.nokadd && touched.nokadd ? "red" : "#C1C1C1",
                outline: "none",
              }}
            />
          </div>
          <div className="flex justify-end mx-4">
            <button className="border rounded-2xl p-3 w-[100px] gap-[10px] mx-[10px]  bg-blue text-white font-semibold">
              reset
            </button>
            <button
              className="border rounded-2xl p-3 w-[100px] gap-[10px] mx-[10px]  bg-blue text-white font-semibold"
              type="submit"
            >
              submit{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
