import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Modal from './Modal';

// React Icons
import { FaBars, FaFacebook, FaInstagram, FaTwitter, FaXmark } from 'react-icons/fa6'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  // NavItems
  const navItems = [
    { path: '/', link: 'Home' },
    { path: '/services', link: 'Services' },
    { path: '/about', link: 'About' },
    { path: '/blogs', link: 'Blogs' },
    { path: '/contact', link: 'Contact' },
  ]

  // Modal Details
  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <header className='bg-black text-white fixed top-0 left-0 right-0'>
      <nav className='px-4  py-4 max-w-7xl mx-auto flex justify-between items-center'>
        <a href="/" className='text-xl font-bold text-white' >Morethan<span className='text-orange-500'>SPEC
        </span></a>
        {/* NavItems for large devices */}
        <ul className='md:flex gap-12 text-lg hidden'>
          {
            navItems.map(({ path, link }) => <li className='text-white' key={path}>
              <NavLink className={({ isActive, isPending }) =>
                isActive
                  ? "active"
                  : isPending
                    ? "pending"
                    : ""
              } to={path}>{link}</NavLink>
            </li>)
          }
        </ul>
       {/* Menu Icons */}
<div className='text-white md:flex gap-4 items-center hidden'>
  <a href="/" className='hover:text-orange-500 lg:flex md:hidden'><FaFacebook /></a>
  <a href="/" className='hover:text-orange-500 lg:flex md:hidden'><FaInstagram /></a>
  <a href="/" className='hover:text-orange-500 lg:flex md:hidden'><FaTwitter /></a>
  <button onClick={openModal} className='bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white
   hover:text-orange-500 transition-all duration-200 ease-in'>Log in
  </button>
</div>
         
        {/* Modal Components */}
        <Modal isOpen={isModalOpen} onClose={closeModal} />

        {/* Mobile menu button, display mobile screen */}
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='cursor-pointer'>
            {
              isMenuOpen ? <FaXmark className='w-5 h-5' /> : <FaBars className='w-5 h-5' />
            }
          </button>
        </div>
      </nav>
      {/* Menu Items only for mobile*/}
<div>
  <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white 
    ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all ease-out duration-150" : "hidden"}`}>
    {
      navItems.map(({ path, link }) => <li className='text-black' key={path}>
        <NavLink onClick={toggleMenu} to={path}>{link}</NavLink>
      </li>)
    }
    <li>
      <button onClick={() => { openModal(); toggleMenu(); }} className='w-full bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white
        hover:text-orange-500 transition-all duration-200 ease-in'>Log in
      </button>
    </li>
  </ul>
</div>
    </header>
  )
}

export default Navbar
