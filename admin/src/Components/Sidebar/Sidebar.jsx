import React from 'react'
import { Link } from 'react-router-dom'
import add_product_icon from '../../assets/add_product_icon.png'
import product_list from '../../assets/product_list.png'

const Sidebar = () => {
  return (
    <div className='py-4 px-2 w-full sm:w-1/4 lg:w-1/6 h-full bg-gray-100 flex flex-col sm:flex-col lg:flex-col gap-4'>
      <Link to='/addproduct' className="">
        <div className='flex flex-row items-center gap-x-2 bg-white p-2 mx-2 rounded-md'>
          <img src={add_product_icon} alt="Add Product" className='h-8 w-8' />
          <p className='mx-2 font-bold'>Add Product</p>
        </div>
      </Link>
      <Link to='/listproduct' className="">
        <div className='flex flex-row items-center gap-x-2 bg-white mx-2 p-2 rounded-md'>
          <img src={product_list} alt="Product List" className='h-8 w-8' />
          <p className='mx-2 font-bold'>Product List</p>
        </div>
      </Link>
    </div>
  )
}

export default Sidebar
