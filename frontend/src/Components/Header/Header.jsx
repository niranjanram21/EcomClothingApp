// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'; // Add this line
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header1 = () => {
    const [menu, setMenu] = useState("shop");

    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
                <Link to="/" className="inline-flex items-center text-xl font-extrabold md:text-3xl mx-4" aria-label="logo">
                    <span className="text-red-500 title1">Trend</span>
                    <span className="text-slate-900 title2">Hub</span>
                </Link>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center sm:mt-4">
                    <Link onClick={() => setMenu("shop")} to="/" className="navTabs mr-5 hover:text-gray-900">Shop{menu === "shop" && <hr />}</Link>
                    <Link onClick={() => setMenu("men")} to="/men" className="navTabs mr-5 hover:text-gray-900">Men{menu === "men" && <hr />}</Link>
                    <Link onClick={() => setMenu("women")} to="/women" className="navTabs mr-5 hover:text-gray-900">Women{menu === "women" && <hr />}</Link>
                    <Link onClick={() => setMenu("kids")} to="/kids" className="navTabs mr-5 hover:text-gray-900">Kids{menu === "kids" && <hr />}</Link>
                </nav>

                <div className="flex flex-row sm:flex-row sm:mt-4">
                    <Link to="/cart">
                        <FontAwesomeIcon className='mr-8 mt-2 h-8 w-8 justify-center items-center' icon={faShoppingCart} />
                    </Link>
                    {localStorage.getItem('auth-token') ? (
                        <button onClick={() => {
                            localStorage.removeItem('auth-token');
                            window.location.replace('/');
                        }} className="border-solid border-2 border-slate-500 rounded-3xl px-4 py-2 hover:bg-red-100 cursor-pointer inline-flex items-center text-base ">Log out</button>

                    ) : (
                        <Link to='/login'><button className="border-solid border-2 border-slate-500 rounded-3xl px-4 py-2 hover:bg-red-100 cursor-pointer inline-flex items-center text-base ">Log in</button>
                        </Link>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header1;
