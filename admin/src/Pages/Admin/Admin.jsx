import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Addproduct from '../../Components/Addproduct/Addproduct'
import Listproduct from '../../Components/Listproduct/Listproduct'

const Admin = () => {
  return (
    <div className='flex flex-col sm:flex-row h-screen'>
      <Sidebar />
      <div className='flex-grow flex justify-center items-center'>
        <Routes>
          <Route path='/addproduct' element={<Addproduct />} />
          <Route path='/listproduct' element={<Listproduct />} />
        </Routes>
      </div>
    </div>
  )
}

export default Admin
