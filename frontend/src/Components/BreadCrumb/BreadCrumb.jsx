/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

const BreadCrumb = (props) => {
    const { product } = props
    return (
        <div className='ml-4 mt-8 sm:ml-4 md:ml-12 lg:ml-36'>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">{product.category}</a></li>
                    <li className="breadcrumb-item active" aria-current="page">{product.name}</li>
                </ol>
            </nav>
        </div>
    )
}

export default BreadCrumb
