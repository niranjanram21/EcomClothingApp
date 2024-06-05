/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {

    const { product } = props
    const { addToCart } = useContext(ShopContext)

    return (
        <div className=" py-4 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="grid gap-12 md:grid-cols-2">
                    <div className="grid gap-3 lg:grid-cols-5">
                        <div className="order-last flex gap-4 lg:order-none lg:flex-col">
                            <div className="overflow-hidden rounded-lg bg-gray-100">
                                <img src={product.image} loading="lazy" alt="Photo by Himanshu Dewangan" className="h-full w-full object-cover object-center" />
                            </div>

                            <div className="overflow-hidden rounded-lg bg-gray-100">
                                <img src={product.image} loading="lazy" alt="Photo by Himanshu Dewangan" className="h-full w-full object-cover object-center" />
                            </div>

                            <div className="overflow-hidden rounded-lg bg-gray-100">
                                <img src={product.image} loading="lazy" alt="Photo by Himanshu Dewangan" className="h-full w-full object-cover object-center" />
                            </div>
                            <div className="overflow-hidden rounded-lg bg-gray-100">
                                <img src={product.image} loading="lazy" alt="Photo by Himanshu Dewangan" className="h-full w-full object-cover object-center" />
                            </div>

                        </div>

                        <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
                            <img src={product.image} loading="lazy" alt="Photo by Himanshu Dewangan" className="h-full w-full object-cover object-center" />

                            {/* <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">sale</span> */}


                        </div>
                    </div>

                    <div className="md:py-8">
                        <div className="mb-2 md:mb-3">
                            <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">{product.name}</h2>
                            <span className="mb-0.5 inline-block text-gray-500">Category: {product.category}</span>

                        </div>

                        <span className="flex items-center my-4">
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <span className="text-gray-600 ml-3">52 Reviews</span>
                        </span>

                        <div className="mb-8 md:mb-10">
                            <span className="mb-3 inline-block text-sm font-semibold text-gray-500 md:text-base">Size</span>

                            <div className="flex flex-wrap gap-3">
                                <button type="button" className="flex p-4 h-8 w-12 items-center justify-center rounded-md border bg-gray-100 text-center text-sm font-semibold text-gray-800 transition duration-100 hover:bg-gray-100 active:bg-gray-200">XS</button>
                                <button type="button" className="flex p-4 h-8 w-12 items-center justify-center rounded-md border bg-gray-100 text-center text-sm font-semibold text-gray-800 transition duration-100 hover:bg-gray-100 active:bg-gray-200">S</button>
                                <button type="button" className="flex p-4 h-8 w-12 items-center justify-center rounded-md border bg-gray-100 text-center text-sm font-semibold text-gray-800 transition duration-100 hover:bg-gray-100 active:bg-gray-200">M</button>
                                <button type="button" className="flex p-4 h-8 w-12 items-center justify-center rounded-md border bg-gray-100 text-center text-sm font-semibold text-gray-800 transition duration-100 hover:bg-gray-100 active:bg-gray-200">L</button>
                                <button type="button" className="flex p-4 h-8 w-12 items-center justify-center rounded-md border bg-gray-100 text-center text-sm font-semibold text-gray-800 transition duration-100 hover:bg-gray-100 active:bg-gray-200">XL</button>
                            </div>
                        </div>

                        <div className="mb-4">
                            <div className="flex items-end gap-2">
                                <span className="text-xl font-bold text-gray-800 md:text-2xl">${product.new_price}</span>
                                <span className="mb-0.5 text-red-500 line-through">${product.old_price}</span>
                            </div>

                            <span className="text-sm text-gray-500">incl. GST plus shipping</span>
                        </div>

                        <div className="mb-6 flex items-center gap-2 text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                            </svg>

                            <span className="text-sm">2-4 day shipping</span>
                        </div>
                        <div className="flex gap-2.5">
                            <a onClick={() => { addToCart(product.id) }} className="inline-block flex-1  bg-red-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none hover:cursor-pointer ring-red-300 transition duration-100 hover:bg-red-600 focus-visible:ring active:bg-red-700 sm:flex-none md:text-base">Add to cart</a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDisplay
