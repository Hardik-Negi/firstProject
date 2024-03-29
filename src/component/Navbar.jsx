import React,{useEffect, useState} from "react";
import { FaSearch } from "react-icons/fa";
import { useDebounce } from "use-debounce";

const Navbar = ({Query,setQuery} ) => {
  const [text, setText] = useState('Hello');
  const [value] = useDebounce(Query, 1000);
// const [debounceSearch]=useDebounce(Query,2000);
// function performSearch(query) {
//   console.log('Searching for:', query.target.value);
//   // Replace this with your actual search logic
// }
React.useEffect(() => {
  
}, [value]);
  // Function to handle search query change
  const Search = (event) => {
    // setText(event.target.value)
    setQuery(event.target.value);
  };
  console.log("valueeeeee", value)
  return (
    <div className="p-5">
      <div className="second-main grid grid-cols-3 ">
        <div className="flex justify-evenly items-center">
          <span className="font-Inter text-2xl text-blue font-bold">
            "Welcome Super Admin Hardik"
          </span>
        </div>
        <div className="flex justify-evenly items-center">
          <div className="flex flex-row border items-center bg-lightgrey border-lightgrey rounded-3xl p-2 my-4 w-4/5 gap-4  placeholder:pl-4">
            <FaSearch className="w-4 h-4 text-gray " />
            <input
              className="flex flex-1 outline-none bg-lightgrey "
              type="text"
              placeholder=" search here"
              onChange={Search}
              value={Query}
            />
          </div>
          <img src="src/assets/logo4.png" alt="" srcset="" />
        </div>
        <div className="flex justify-end gap-6 items-center px-10">
          <img src="src/assets/logo5.png" alt="" />
          <img src="src/assets/logo6.png" alt="" />
          <img src="src/assets/logo7.png" alt="" />
        </div>
      </div>

      <div className=" flex mx-4  gap-2 text-black items-center  p-2 ">
        <img className="h-3 " src="src/assets/vector10.png" alt="" srcset="" />
        <span className="font-semibold  ">DashBoard</span>
      </div>
      <div className="flex justify-end mx-4">
        <button className="border rounded-2xl p-3  bg-blue text-white font-semibold">
          Create Admin
        </button>
      </div>
      <div className="mt-3 border bg-lightblue border-none text-blue font-semibold p-1 text-lg">
        <marquee> BOOKING FUNCTIONALITY ENABLED </marquee>{" "}
      </div>
      <div className="my-4 bg-lightblue p-6">
        <h1 className="flex justify-center text-2xl font-bold text-blue ">
          Controller Under You
        </h1>
        <ol className=" font-medium text-lg px-4 py-4   ">
          <li>
            {" "}
            1. The Data table below includes all the Controller details who are
            Registered under you.
          </li>
          <li>
            {" "}
            2. The table also shows the No. of Head Coach, Coach and Drivers
            under each Controller.
          </li>
          <li>
            {" "}
            3. You can select on “View More” to see or modify their details.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Navbar;
