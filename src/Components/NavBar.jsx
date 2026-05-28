import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
  const navigate = useNavigate()
  return (
    <>
    <div className="nav w-full fixed z-10 bg-[#0C0F21] p-5 max-sm:p-1 flex justify-between items-center">
         <div className="logo flex items-center gap-3 cursor-pointer" onClick={()=>navigate('/')}>
          <div className="left">
            <img src="./logo.png" alt="" className="w-10" />
          </div>
          <div className="right">
            <h2 className="font-bold text-md text-gray-200 max-md:hidden">LinkHub</h2>
            <p className="text-[13px] text-gray-400 max-md:hidden">
              Your Shortcuts Collection
            </p>
          </div>
        </div>
        <a href="https://www.google.com" target='_blank'>
        <div className="profile w-8 h-8 rounded-full overflow-hidden">
            <i className="ri-global-line  text-2xl text-blue-400"></i>
          </div></a>
    </div>
    </>
  )
}

export default NavBar
