import React from 'react'
import AdminSidebar from '../components/AdminSidebar'

function logout() {
  return (
    <div className='adminContainer flex w-screen justify-items-center align-items-center h-screen'>
      {/* {Sidebar} */}
      <AdminSidebar />
      
      {/* {Main} */}
      <main className="h-screen w-full">Logout</main>
      
    </div>
  )
}

export default logout