import React from 'react'

const Footer = () => {
  return (
    <div className='py-4'>
  <div className='m-6 px-10 bg-lightblue py-10 '>
 <h1 className='flex justify-center text-2xl font-bold text-blue '>Add an Admin</h1>
 <ol className=' font-medium text-lg px-4 py-4   '>
    <li> 1. You’re an Admin and you have the ability to create another Admin.</li>
    <li> 2. Remember, Once you created another Admin you can’t update or change their profile info.</li>
    <li> 3. The new Admin will have all the access and abilities same as yours.</li>

 </ol>
 <div className='flex justify-center'>
 <button className='border rounded-2xl p-3 mt-2 bg-blue text-white font-semibold'>Add an Admin</button>

 </div>
 </div>
 <div className='m-6 bg-lightblue px-10 py-10'>
 <h1 className='flex justify-center text-2xl font-bold text-blue '>Add a Controller</h1>
 <ol className=' font-medium text-lg px-4 py-4   '>
    <li> 1. Remember, you’re an Admin and you can only register a Controller but you can update all Registered User’s info/details, except another Admin.</li>
    <li> 2. All Registered Users include (Controller, Head Coach, Coach, Drivers).</li>
   
 </ol>
 <div className='flex justify-center'>
 <button className='border rounded-2xl p-3 mt-2  bg-blue text-white font-semibold'>Add a Controller</button>

 </div>
 </div>


    </div>
  )
}

export default Footer