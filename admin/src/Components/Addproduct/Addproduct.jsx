import React, { useState } from 'react';

const AddProduct = () => {
    const [productDetails, setProductDetails] = useState({
        name: '',
        image: null,
        category: 'women',
        new_price: '',
        old_price: ''
    });

    const changeHandler = (e) => {
        const { name, value, files } = e.target;
        if (name === 'image') {
            setProductDetails({ ...productDetails, [name]: files[0] });
        } else {
            setProductDetails({ ...productDetails, [name]: value });
        }
    };

    const add_Product = async (e) => {
        e.preventDefault();
        let responseData;
        let product = { ...productDetails };

        let formData = new FormData();
        formData.append('product', productDetails.image);

        await fetch('https://ecomclothingapp.onrender.com/upload', {
            method: 'POST',
            body: formData,
        })
            .then((resp) => resp.json())
            .then((data) => { responseData = data; });

        if (responseData.success) {
            product.image = responseData.image_url;
            console.log(product);
            // Proceed with adding the product to the database
            await fetch('https://ecomclothingapp.onrender.com/addproduct', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            }).then((resp) => resp.json())
                .then((data) => {
                    if (data.success) {
                        console.log("Product added successfully");
                    }
                });
        }
        alert("product added")

    };

    return (
        <div className="py-6 sm:py-8 lg:py-4 w-full flex justify-center items-center">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">Add Product</h2>

                <form className="mx-auto max-w-lg rounded-lg border" onSubmit={add_Product}>
                    <div className="flex flex-col gap-4 p-4 md:p-8">
                        <div>
                            <label htmlFor="name" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Product Name</label>
                            <input
                                name="name"
                                type="text"
                                value={productDetails.name}
                                onChange={changeHandler}
                                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                            />
                        </div>

                        <div>
                            <label htmlFor="old_price" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Price</label>
                            <input
                                name="old_price"
                                type="text"
                                value={productDetails.old_price}
                                onChange={changeHandler}
                                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                            />
                        </div>

                        <div>
                            <label htmlFor="new_price" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Offer Price</label>
                            <input
                                name="new_price"
                                type="text"
                                value={productDetails.new_price}
                                onChange={changeHandler}
                                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                            />
                        </div>

                        <div>
                            <label htmlFor="category" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Product Category</label>
                            <select
                                value={productDetails.category}
                                onChange={changeHandler}
                                name="category"
                                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                            >
                                <option value="" disabled>select an option</option>
                                <option value="men">Men</option>
                                <option value="women">Women</option>
                                <option value="kids">Kids</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="image" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Product Image</label>
                            <input
                                onChange={changeHandler}
                                name="image"
                                type="file"
                                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                            />
                        </div>

                        <button type="submit" className="block rounded-lg bg-red-500 px-8 py-3 my-2 text-center text-sm font-semibold text-white outline-none ring-red-300 transition duration-100 hover:bg-red-700 focus-visible:ring active:bg-red-600 md:text-base">
                            Add Product
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
