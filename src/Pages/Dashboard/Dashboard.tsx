import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './Dashboard.scss'


const Dashboard: React.FC = () => {
  return (
    <div>
        <Navbar />
        <div className='Dash-Container'>

             <div className='Dashboard'>
                <div className='Sidebar'>
                    <Sidebar />
                </div>

                <div>
                    <Outlet />
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default Dashboard

