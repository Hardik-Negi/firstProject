import React, { useState } from "react";
import "../file.css";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const [hamburger, setHamburger] = useState(true);
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  const handle = (event , link) => {
    console.log("navigate")
    setActive(event);
    navigate(link);
  };

  return (
    <div
      className="h-screen  tabName  "
      style={{ width: hamburger ? "20%" : "7.5%" }}
    >
      <div
        className="mx-0 py-4  flex   px-4"
        style={{ justifyContent: hamburger ? "space-between" : "center" }}
      >
        {hamburger && (
          <div className="">
            <img src="src/assets/logo3.png" alt="" />
          </div>
        )}
        <div
          className="flex justify-center items-center"
          style={{ marginLeft: "-5px" }}
        >
          <button
            onClick={() => {
              setHamburger(!hamburger);
            }}
          >
            <img src="src/assets/ham.png" alt="" />
          </button>
        </div>
      </div>

      <div className="m-4 px-5 mx-2 my-10">
        <div
          onClick={() => handle(1 , '/')}
          className="flex gap-3 px-4 py-2 rounded-lg my-4 "
          style={{
            backgroundColor: active === 1 ? "white" : "#034DAB",
          }}
        >
          <img
            src={
              active === 1
                ? "src/assets/vector14.png"
                : "src/assets/Vector5.png"
            }
            alt=""
          />

          {hamburger && (
            <div
              className=" font-sm pl-10 "
              style={{color : active===1 ? '#034DAB' : "white"}}
            >
              {" "}
              Dashboard{" "}
            </div>
          )}
        </div>

        <div
          onClick={() => {
            handle(2 ,"/registration" );
            // navigate("/registration");
          }}
          className=" flex gap-3 px-4 py-2 rounded-lg my-4 "
          style={{
            backgroundColor: active === 2 ? "white" : "#034DAB",
            // border : '1px solid red'
          }}
        >
          <img
            src={
              active === 2
                ? "src/assets/vector15.png"
                : "src/assets/vector6.png"
            }
            alt=""
          />

          {hamburger && (
            <div
              className="text-white font-sm pl-10 "
              style={{
                color: active === 2 ? "#034DAB" : "white",
              }}
            >
              Registered
            </div>
          )}
        </div>
        <div
          onClick={() => handle(3 , '/customer')}
          className="flex gap-3 px-4 py-2 rounded-lg my-4"
          style={{ backgroundColor: active === 3 ? "white" : "#034DAB" }}
        >
          <img
            src={
              active === 3
                ? "src/assets/vector16.png"
                : "src/assets/vector8.png"
            }
            alt=""
          />
          {hamburger && (
            <button
              onClick={() => navigate("/customer")}
              className=" font-sm  pl-10 "
              style={{color: active===3 ? "#034DAB" : "white"}}
            >
              {" "}
              Customer{" "}
            </button>
          )}
        </div>
        <div className="flex gap-3 px-4 py-2 rounded-lg my-4">
          <img src="src/assets/vector2.png" alt="" />
          {hamburger && (
            <button
              onClick={() => navigate("/login")}
              className="text-white font-sm  pl-10 "
            >
              {" "}
              Login{" "}
            </button>
          )}
        </div>
        <div className="flex gap-3 px-4 py-2 rounded-lg my-4">
          <img src="src/assets/vector3.png" alt="" />

          {hamburger && (
            <span className="text-white font-sm  pl-10 ">Driver </span>
          )}
        </div>
        <div className="flex gap-3 px-4 py-2 rounded-lg my-4">
          <img src="src/assets/vector4.png" alt="" />
          {hamburger && (
            <span className="text-white font-sm  pl-10 ">Admin </span>
          )}
        </div>
        <div className="flex gap-3 px-4 py-2 rounded-lg my-4">
          <img src="src/assets/vector5.png" alt="" />
          {hamburger && (
            <span className="text-white font-sm  pl-10  "> Tables </span>
          )}
        </div>
        <div className="flex gap-3 px-4 py-2 rounded-lg my-4 ">
          <img src="src/assets/vector6.png" alt="" />
          {hamburger && (
            <span className="text-white font-sm  pl-10 "> Transactions </span>
          )}
        </div>
        <div
          onClick={() => handle(4,'/ewallet')}
          className="flex gap-3 px-4 py-2 rounded-lg my-4"
          style={{ backgroundColor: active === 4 ? "white" : "#034DAB" }}
        >
          <img
            src={
              active === 4
                ? "src/assets/vector18.png"
                : "src/assets/vector7.png"
            }
            alt=""
          />
          {hamburger && (
            <span
              // onClick={() => navigate("/ewallet")}
              className=" font-sm  pl-10 "
              style={{
                color: active === 4 ? "#034DAB" : "white",
              }}
            >
            Ewallet
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
