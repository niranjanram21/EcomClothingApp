/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

const Item = (props) => {
    return (
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-88 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={props.image} />
            </a>
            <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">{props.name}</h2>
                <p className="font-extrabold mt-1 text-gray-900 text-lg">${props.newPrice}</p>
                <p className="mt-1 line-through">${props.oldPrice}</p>
            </div>
        </div>
    )
}

export default Item
