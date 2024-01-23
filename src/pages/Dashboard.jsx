import React from 'react'
import AdminSidebar from '../components/AdminSidebar'

import { FiSearch } from "react-icons/fi";
import { LuBellDot } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";
import { PiPercentFill } from "react-icons/pi";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { MdAccountBox } from "react-icons/md";
import { FaPercent } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { TfiStatsDown, TfiStatsUp } from "react-icons/tfi";
import AreaCharts from '../components/AreaCharts';
import PiCharts from '../components/PiCharts';
import Progressbar from '../components/Progressbar';




const user=[
{
  Name:"Soumik",
  Image:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  Role:"Individual"
}

]





function dashboard() {
  return (
    <div className='adminContainer flex w-screen h-screen'>
      {/* {Sidebar} */}
      <AdminSidebar />
      
      {/* {Main} */}
      <main className="h-full w-full dashboard">
        <div className="bar h-20 border-b-2 flex px-4 flex">
          <FiSearch className='text-4xl'/>
          <input type="text" placeholder='Search Here' className='mr-auto mx-4 w-full h-full'/>
          <LuBellDot className='text-4xl mx-6'/>
          {
            user.map((item,index)=>
            <>
              <img src={item.Image} alt={item.Name} className='h-10 w-10 rounded-full mx-2' />
                <div className="userDetails flex flex-col justify-center pr-4">
                  <h4 className='userName font-semibold'>{item.Name}</h4>
                  <h4 className='userRole text-slate-600'>{ item.Role}</h4>
                </div>
            </>
            
            )   
          }  
        </div>
        
        <div className="welcomeBar h-20 flex items-center justify-between mx-8 mt-4">
          <div className="mainGreet">
          <h2 className='text-4xl font-bold'>Welcome Back,</h2>
          {
            user.map((item,index)=>
              <p className='text-xl font-semibold text-zinc-400 mt-2'>{ item.Name }, let's check your stats today</p>
            )
          }
          </div>
          <button className='flex justify-center items-center px-8 py-2 rounded-lg add-btn'>
          <FaPlus />
          Add Charts
          </button>
        </div>
        
        <section className='widgetContainer w-full h-36 mt-6 flex justify-between items-center px-12'  >
          <div className="sales wid-box border-2 rounded-2xl">
            <FaPercent className="wid-icon"/>
            <div className="wid-info">
            <h4 className='font-semibold text-xl'>Total Sales</h4>
            <p className='text-4xl font-bold'><span>$</span>40,543</p>
            </div>
            <div className="percent-wid">
            <TfiStatsUp className='mx-2'/>
            15%
            </div>
          </div>
          <div className="sales wid-box border-2 rounded-2xl">
            <FaDollarSign className="wid-icon"/>
            <div className="wid-info">
            <h4 className='font-semibold text-xl'>Total Sales</h4>
            <p className='text-4xl font-bold'><span>$</span>40,543</p>
            </div>
            <div className="percent-wid">
            <TfiStatsUp className='mx-2'/>
            15%
            </div>
          </div>
          <div className="clients wid-box border-2 rounded-2xl">
            <BsFillPersonFill className="wid-icon"/>
            <div className="wid-info">
            <h4 className='font-semibold text-xl'>Total Clients</h4>
            <p className='text-4xl font-bold'>43</p>
            </div>
          </div> 
        </section> 
        <section className="hero w-full h-96 mt-6 flex justify-around items-center">
          <div className="salesGraph h-full border-2 rounded-2xl wid-graphs">
          <p className='font-semibold text-2xl py-4 px-2'>Sales Overview</p>
          <AreaCharts className="h-2/5"/>
          </div>
          <div className="reportGraph h-full border-2 rounded-2xl wid-graphs">
          <p className='font-semibold text-2xl pt-4 px-2'>Earning Report</p>
          <p className='text-xl pt-2 px-2 text-gray-500'>Income Report Shown in graphs</p>
          <PiCharts/>
          </div>
          <div className="contrySalesGraph h-full border-2 rounded-2xl wid-graphs ">
          <p className='font-semibold text-2xl pt-4 px-2'>Earning Report</p>
          <Progressbar/>
          </div>
        </section>
        
      </main>
    </div>
  )
}




export default dashboard