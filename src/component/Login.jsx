import React from 'react'

const Login = () => {

  
  return (
   <>
     <div className='bg-blue h-screen flex justify-center items-center' >
     <div className=' bg-white p-8 w-96 flex-col justify-center rounded-3xl z-10 '>
        <div className=' flex flex-col justify-center items-center '> 
        <img className=' ' src="src/assets/logo.png" alt="" />
        <span className=' text-2xl text-blue decoration-8 block mt-10 mb-5 font-bold'>Welcome Back to S-TRIKE! </span>
        <span className='block text-xl text-black font-bold mt-5 font-Inter'>Log In Below</span>
        </div>
        <div className=' justify-start w-full gap-1'>
          <span className='block text-black font-medium my-4'>Phone number</span>
          <form action=''>
          <select className="p-1.5 ml-2 border border-grey rounded-lg" >
        <option value="1">+91</option>
        <option value="2">+92</option>
        <option value="3">93</option>
      </select>
            <input type="text"  className=" w-60 p-2 ml-1.5 border border-grey rounded-lg placeholder-gray" placeholder="Enter your phone number"  />
            </form>
        </div>
        <div className=' justify-start w-full'>
          <span className='block text-black font-medium mt-4 mb-2'>Password</span>
          <form action=''>
            <input type="Password"  className="w-full p-2 border ml-2 mb-4 border-grey rounded-lg placeholder-gray" placeholder="password"  />
            </form>
        </div>
        <div className='flex justify-end text-sm text-blu font-medium mb-6'>
        <span >Forget password?</span>

        </div>
        <div className='w-full mt-10 mb-6  border bg-blue text-white rounded-2xl flex justify-center'>
       
        <input className='h-10' type="submit" value="Log in"/>
       
        </div>
     </div>
<div className=' mt-16 w-full  absolute bottom-0 '>
<img className=' object-contain ' src="src/assets/build.png" alt="building" />
</div>
     </div>
    
   </>
  )
}

export default Login