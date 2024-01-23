import React from 'react'
import AdminSidebar from '../components/AdminSidebar'

function clients() {
  return (
    <div className='adminContainer flex w-screen justify-items-center align-items-center h-screen'>
      {/* {Sidebar} */}
      <AdminSidebar />
      
      {/* {Main} */}
      <main className="h-screen w-full">Clients</main>
      
    </div>
  )
}

export default clients