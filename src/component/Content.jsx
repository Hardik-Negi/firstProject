import React from 'react'
import { users } from '../data/data'


const Content = ({Query}) => {
  return (

            
    <div className='m-5'>
   
       <table className=' w-full text-center border-none'>
      <thead className='h-12 bg-darkblue ml-10 text-white font-semibold text-sm '>
            <th className='rounded-l-3xl font-inter'>Record ID</th>
            <th >Controller Name</th>
            <th>Controller No.</th>
            <th>Head Coach</th>
            <th>Coach</th>
            <th>Driver</th>
            <th>Controller Status</th>
            <th className='rounded-r-3xl'>All Details</th>
          </thead>
        
           <tbody className=' m-6 ' >
     {      users.filter((item) =>item.name.toLowerCase().includes(Query.toLowerCase())).map((item , index) =>{
            return (
              <tr key={index}  className='border-b-2 border-lightgrey font-medium    '>
              <td className=''>{item.Rid}</td>
              <td className='p-6 text-lg '>{item.name}</td>
              <td>{item.Tid}</td>
              <td>{item.hcoach}</td>
              <td>{item.coach}</td>
              <td>{item.Stud}</td>
              <td>{item.stats}  </td>
              <td className='text-blue'>{item.Alldetail}   </td>
            </tr>
            )
           }) }

           </tbody>

       </table>


    </div>
  )
}

export default Content