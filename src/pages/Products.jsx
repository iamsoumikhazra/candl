import React from 'react'
import AdminSidebar from '../components/AdminSidebar'

function products() {
  return (
    <div className='adminContainer flex w-screen justify-items-center align-items-center h-screen'>
      {/* {Sidebar} */}
      <AdminSidebar />
      
      {/* {Main} */}
      <main className="h-screen w-full">Products</main>
      
    </div>
  )
}

export default products