import React from 'react'
import { FaSearch } from "react-icons/fa";
import Customer2 from './Customer2';
const Hello = () => {
  return (
    <div className='py-5 flex flex-col w-full '>
         <div className='second-main grid grid-cols-3  gap-14  '>
            <div className='flex justify-evenly items-center'>
                <span className='font-Inter text-2xl text-blue font-bold'>"Welcome Super Admin Hardik"</span>
            </div>
            <div className='flex justify-evenly items-center'>
            <div className='flex flex-row border items-center bg-lightgrey border-lightgrey rounded-3xl p-2 my-4 w-4/5 gap-4  placeholder:pl-4'>
            <FaSearch className='w-4 h-4 text-gray ' />
                <input className='flex flex-1 outline-none bg-lightgrey ' type="text" placeholder=' search here' />
                </div>
                <img  src="src/assets/logo4.png" alt="" srcset="" />
            </div>
            <div className='flex justify-end gap-6 items-center px-10'> 
               <img src="src/assets/logo5.png" alt=""  />
               <img src="src/assets/logo6.png" alt=""  />
               <img  src="src/assets/logo7.png" alt=""  />
            </div>
        </div>
       
      <div className=' flex mx-4  gap-2 text-black items-center  p-2 '>
        <img className='h-3 ' src="src/assets/vector10.png" alt="" srcset="" />
        <span className='font-semibold  '>Customer</span>
       
      </div>

{/* <div className='flex justify-end mx-4'> 
<button className='border rounded-2xl p-3  bg-blue text-white font-semibold'>Create Admin
</button>
</div> */}
<Customer2/>
    </div>
  )
}

export default Hello