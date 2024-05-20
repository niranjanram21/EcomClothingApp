// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import { useState } from 'react';

function Header() {
  const [menu, setMenu] = useState("shop"); // Corrected state variable name and initial value

  return (
    <Navbar expand="lg">
      <Container fluid className='py-3 border-b border-red-300'>
        <Navbar.Brand>
          <Link to="/" className="inline-flex items-center text-xl font-extrabold md:text-3xl mx-4" aria-label="logo">
            <span className="text-red-500 title1">Trend</span>
            <span className="text-slate-900 title2">Hub</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto ml-8 gap-3 my-2 my-lg-0 navTabs text-slate-900 sm:w-5" navbarScroll>
            <Link onClick={() => setMenu("shop")} to="/" className=''>
              Shop{menu==="shop" ? <hr/> : <></>}
            </Link>
            <Link onClick={() => setMenu("men")} to="/men" className=''>
              Men{menu==="men" ? <hr/> : <></>}
            </Link>
            <Link onClick={() => setMenu("women")} to="/women" className=''>
              Women{menu==="women" ? <hr/> : <></>}
            </Link>
            <Link onClick={() => setMenu("kids")} to="/kids" className=''>
              Kids{menu==="kids" ? <hr/> : <></>}
            </Link>
          </Nav>
          <Nav className="flex flex-row justify-center items-center my-2 my-lg-0 text-center text-slate-900" navbarScroll>
            <Link to="/cart">
              <FontAwesomeIcon className='mr-8 mt-2 h-8 w-8 justify-center items-center' icon={faShoppingCart} />
            </Link>
            <Link to="/login" className='border-solid border-2 border-slate-800 rounded-2xl px-3 py-2 hover:bg-red-300'>
              Sign in
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
