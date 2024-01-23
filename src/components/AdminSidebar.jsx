import React from 'react'
import { MdOutlineDashboard, MdPeopleOutline } from "react-icons/md";
import { LuPackage } from "react-icons/lu";
import { TbDiscount2 } from "react-icons/tb";
import { NavLink } from 'react-router-dom';
import { RiLogoutCircleRLine } from "react-icons/ri";


function AdminSidebar() {
  
  const menuItems=[
    {
      path:"/admin/dashboard",
      name:"Dashboard",
      icon:<MdOutlineDashboard />
    },
    {
      path:"/admin/products",
      name:"Products",
      icon:<LuPackage />

    },
    {
      path:"/admin/sales",
      name:"Sales",
      icon:<TbDiscount2 />
    },
    {
      path:"/admin/clients",
      name:"clients",
      icon:<MdPeopleOutline />
    }
  
  ]
  

  return (
    <div className="w-2/12 p-4 z-10 border-r-2 flex flex-col admin-side-flex">
      <h1 className='font-semibold text-6xl logo'>H&L</h1>
      <div className="dashContainer">
        {
          menuItems.map((item,index)=>(
          
            // <NavLink to={item.path} key={index} className="link flex items-center px-6 py-5 my-16 rounded-lg dash-menu-btn" style={{backgroundColor: location.pathname.includes(item.path) ?"#1245A8":"white"}}>
            <NavLink to={item.path} key={index} className="link flex items-center px-6 py-5 my-16 rounded-lg dash-menu-btn">
            
            
              <div className='icon pr-3 '>{item.icon}</div>
              <div className="link_text">{item.name}</div>
            </NavLink>
          ))
        }
      </div>
      <NavLink to={"/admin/logout"} className='bolder text-xl mt-96 mb-6'>
        <button className='flex items-center justify-center bg-zinc-900 text-white px-6 py-5 rounded-lg w-full log'>
        <RiLogoutCircleRLine />
        <p className='pl-3 '>Logout</p>
        </button>
      </NavLink>
    </div>
  )
  
}



export default AdminSidebar