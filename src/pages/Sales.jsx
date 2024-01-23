import React from 'react'
import AdminSidebar from '../components/AdminSidebar'

function sales() {
  return (
    <div className='adminContainer flex w-screen justify-items-center align-items-center h-screen'>
      {/* {Sidebar} */}
      <AdminSidebar />
      
      {/* {Main} */}
      <main className="h-screen w-full">Sales</main>
      
    </div>
  )
}

export default sales