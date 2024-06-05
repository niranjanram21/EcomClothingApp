/* eslint-disable no-unused-vars */
import React from 'react'
import offerImg from '../../Assets/offerImg.jpg'

const Offers = () => {
    return (
        <div>
            <div className="py-6 sm:py-8 lg:py-12" data-aos="zoom-in">
                <div className="mx-auto max-w-screen-lg px-4 md:px-8">
                    <div className="flex flex-col overflow-hidden rounded-lg bg-red-100 sm:flex-row md:h-80">
                        <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-2/5">
                            <h2 className="mb-4 text-xl font-bold text-gray-800 md:text-2xl lg:text-4xl">Exclusive Offers<br />For You</h2>

                            <p className="mb-8 max-w-md text-gray-900">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>

                            <div className="mt-auto">
                                <a href="#" className="inline-block rounded-lg bg-red-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-red-300 transition duration-100 hover:bg-red-200 focus-visible:ring active:bg-red-200 md:text-base">Check now</a>
                            </div>
                        </div>

                        <div className="order-first h-48 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-3/5">
                            <img src={offerImg} loading="lazy" alt="Photo by Dom Hill" className="h-full w-full object-cover object-center" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offers
