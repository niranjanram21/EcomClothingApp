import React, { useEffect, useState } from 'react';

const Listproduct = () => {
    const [allProducts, setAllProducts] = useState([]);

    const fetchInfo = async () => {
        try {
            const response = await fetch('https://ecomclothingapp.onrender.com/allproduct');
            const data = await response.json();
            setAllProducts(data);
        } catch (error) {
            console.error("Failed to fetch products:", error);
        }
    };

    useEffect(() => {
        fetchInfo();
    }, []);

    const removeProduct = async (id) => {
        try {
            await fetch('https://ecomclothingapp.onrender.com/removeproduct', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: id })
            });
            await fetchInfo();
        } catch (error) {
            console.error("Failed to remove product:", error);
        }
    };

    return (
        <div className="py-6 my-4 sm:py-8 xl:py-4 md:mt-16">
            <div className="mx-auto max-w-screen-lg px-4 md:px-8">
                <div className="mb-6 sm:mb-10 lg:mb-4 xl:mt-4">
                    <h2 className="mb-2 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">All Products List</h2>
                </div>

                <div className="max-h-[600px] overflow-y-auto mb-2 flex flex-col sm:mb-8 sm:divide-y sm:border-b">
                    {allProducts.map((product, index) => (
                        <div key={index} className="py-2 sm:py-8">
                            <div className="flex flex-wrap gap-y-4 gap-x-12 sm:py-2.5 xl:gap-32">
                                <div className="sm:-my-2.5">
                                    <span className="group relative block h-28 w-20 overflow-hidden rounded-lg bg-gray-100 xl:h-36 xl:w-18 sm:h-56 sm:w-40">
                                        <img src={product.image} loading="lazy" alt="product_image" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                    </span>
                                </div>

                                <div className="flex flex-1 flex-col justify-between">
                                    <div>
                                        <div className="mb-1 inline-block text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">{product.name}</div>
                                        <span className="block text-gray-500">Category: {product.category}</span>
                                    </div>

                                    <div className='flex flex-row gap-2'>
                                        <span className="flex items-center gap-1 text-sm text-slate-500">Old Price:</span>
                                        <span className="flex items-center gap-1 text-md font-bold text-slate-800">${product.old_price}</span>
                                    </div>
                                </div>

                                <div className="mr-8 flex w-full justify-between border-t pt-4 sm:w-auto sm:border-none sm:pt-0">
                                    <div className="flex flex-row gap-2 mx-4 pt-3 sm:pt-2 md:mx-8 lg:mx-16">
                                        <span className="block text-gray-500 md:text-lg">Offer Price:</span>
                                        <span className="block font-bold text-gray-800 md:text-lg">${product.new_price}</span>
                                    </div>
                                    <button onClick={() => removeProduct(product.id)} className="select-none text-sm font-semibold text-red-500 transition duration-100 hover:text-red-600 active:text-red-700">Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Listproduct;
