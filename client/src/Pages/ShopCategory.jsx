/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';
import new_collections from '../Assets/new_collections';

const ShopCategory = (props) => {

  const { all_product } = useContext(ShopContext);

  return (
    <>
      <div className="py-2 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="flex flex-col overflow-hidden rounded-lg bg-red-100 sm:flex-row md:h-96">
            <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-2/5">
              <h2 className="mb-4 text-xl font-bold text-gray-800 md:text-2xl lg:text-4xl">Exclusive Offers<br />
                <span className='text-red-600'>12</span> hours <span className='text-red-600'>30</span> mins</h2>

              <p className="mb-8 max-w-md text-gray-900">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>

              <div className="mt-auto">
                <a href="#" className="inline-block rounded-lg bg-red-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-red-300 transition duration-100 hover:bg-red-200 focus-visible:ring active:bg-red-200 md:text-base">Explore Now</a>
              </div>
            </div>

            <div className="order-first h-48 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-3/5">
              <img src={props.banner} loading="lazy" alt="Photo by Dom Hill" className="h-full w-full object-cover object-center" />
            </div>
          </div>
        </div>
      </div>
      
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h2 className='text-center text-2xl mb-4 text-stone-700 font-bold'>New Collections</h2>
          <div className="flex flex-wrap -m-4">
            {all_product.map((item, i) => {
              if (props.category === item.category) {
                return <Item key={i} id={item.id} name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price} />
              }
              else {
                return null
              }
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default ShopCategory
