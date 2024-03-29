import React, { useState } from 'react'
import './navigation.css'
const Navigation = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const handleToggle = () =>{
        setToggleMenu(!toggleMenu)
    }
  return (
    <div>
      <header>
      <div className="px-4 py-2 text-white flex  justify-between bg-red-900">
        <h1>LOGO</h1>
        <div className={toggleMenu ? "md:flex  md:pt-0 pt-10 w-full md:w-auto" : "hidden md:flex"} id="menu">
        <ul>
          <li className="md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3">Home</li>
          <li className="dropdown md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3 relative"><a>Products</a></li> 
          <li className="md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3">AboutUs</li>
          <li className="md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3">ContactUs</li>
        </ul>
        </div>
        <div className= "cursor-pointer md:hidden">
          <input class="menu-btn hidden" type="checkbox" id="menu-btn"/>
          <label class="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" for="menu-btn">
            <span onClick={handleToggle} class="navicon bg-white-darkest flex items-center relative"></span>
          </label>
      </div>
      </div>
    </header>
    </div>
  )
}

export default Navigation
