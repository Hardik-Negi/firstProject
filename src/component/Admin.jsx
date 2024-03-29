import React from 'react'
import Sidebar from './Sidebar'
import Hello from './Hello'
import Customer2 from './Customer2'


const Admin = () => {
  return (
    
        <div className='flex flex-row ' style={{height:window.innerHeight +'px' ,  overflowX: 'hidden' }}>
        <Sidebar />
        <Hello/>
        
        </div>
    
  )
}

export default Admin