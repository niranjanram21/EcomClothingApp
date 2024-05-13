// eslint-disable-next-line no-unused-vars
import React from 'react'
import data_product from '../../Assets/data'
import Item from '../Item/Item'

const Popular = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {data_product.map((item, i) => {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default Popular
