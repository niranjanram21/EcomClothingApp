// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';

const Cart = () => {

  const { all_product, cartItems, removeFromCart, addToCart, getTotalAmount } = useContext(ShopContext)

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-lg px-4 md:px-8">

        <div className="mb-5 flex flex-col sm:mb-8 sm:divide-y sm:border-t sm:border-b">

          {all_product.map((e, index) => {
            if (cartItems[e.id] > 0) {
              return <>
                <div key={index} className="py-2 sm:py-8">
                  <div className="flex flex-wrap gap-4 sm:py-2.5 lg:gap-6">
                    <div className="sm:-my-2.5">
                      <a href="#" className="group relative block h-24 w-16 overflow-hidden rounded-lg bg-gray-100 sm:h-56 sm:w-40">
                        <img src={e.image} loading="lazy" alt="Photo by Thái An" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                      </a>
                    </div>

                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <a href="#" className="w-3/4 mb-1 inline-block text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">{e.name}</a>
                        <span className="block text-gray-500">{e.category}</span>
                      </div>

                      <div>
                        <span className="mb-1 block font-bold text-gray-800 md:text-lg">${e.new_price}</span>
                        <span className="flex items-center gap-1 text-sm text-red-600  line-through">
                          ${e.old_price}
                        </span>
                      </div>
                    </div>

                    <div className="flex w-full justify-between border-t pt-4 sm:w-auto sm:border-none sm:pt-0">
                      <div className="flex flex-col items-start gap-2">
                        <div className="flex h-12 w-20 overflow-hidden rounded border">
                          <div type="number" className="w-full px-4 py-2 outline-none ring-inset ring-indigo-300 transition duration-100 focus:ring" >{cartItems[e.id]}</div>

                          <div className="flex flex-col divide-y border-l">
                            <button onClick={() => { addToCart(e.id) }} className="flex w-6 flex-1 select-none items-center justify-center bg-white leading-none transition duration-100 hover:bg-gray-100 active:bg-gray-200">+</button>
                            <button onClick={() => { removeFromCart(e.id) }} className="flex w-6 flex-1 select-none items-center justify-center bg-white leading-none transition duration-100 hover:bg-gray-100 active:bg-gray-200">-</button>
                          </div>
                        </div>

                        <button onClick={() => { removeFromCart(e.id) }} className="select-none text-sm font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Delete</button>
                      </div>

                      <div className="ml-4 pt-3 sm:pt-2 md:ml-8 lg:ml-16">
                        <span className="block font-bold text-gray-800 md:text-lg">${e.new_price * cartItems[e.id]}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
          })}

        </div>

        <div className="flex flex-col items-end gap-4">
          <div className="w-full rounded-lg bg-gray-100 p-4 sm:max-w-xs">
            <div className="space-y-1">
              <div className="flex justify-between gap-4 text-gray-500">
                <span>Subtotal</span>
                <span>${getTotalAmount()}</span>
              </div>

              <div className="flex justify-between gap-4 text-gray-500">
                <span>Shipping</span>
                <span>$4.99</span>
              </div>
            </div>

            <div className="mt-4 border-t pt-4">
              <div className="flex items-start justify-between gap-4 text-gray-800">
                <span className="text-lg font-bold">Total</span>

                <span className="flex flex-col items-end">
                  <span className="text-lg font-bold">${getTotalAmount()}</span>
                  <span className="text-sm text-gray-500">including VAT</span>
                </span>
              </div>
            </div>
          </div>

          <button className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Check out</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
