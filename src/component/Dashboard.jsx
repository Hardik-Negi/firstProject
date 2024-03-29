import React from 'react'
import Sidebar from './Sidebar'
import Mainbar from './Mainbar'

const Dashboard = () => {
  
  return (
    <div className="flex flex-row" >
    {/* <div className=""> */}
        <Sidebar  />
        <Mainbar  />
    </div>
  )
}

export default Dashboard