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
        <div className="profile w-8 h-8 rounded-full overflow-hidden">
            <img
              src="https://imgs.search.brave.com/j-zNxrFfdHMGVp-256AMGU8Vmzo1lAQZPPoJ_aEqSLE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjAv/MzYyLzYzNC9zbWFs/bC9jYXJ0b29uLWZl/bWFsZS10ZWFjaGVy/LWF2YXRhci13aXRo/LWdsYXNzZXMtaXNv/bGF0ZWQtaW4tYS1i/cmlnaHQtZnJpZW5k/bHktc2V0dGluZy0z/ZC1jYXJ0b29uLWZl/bWFsZS10ZWFjaGVy/LWVkdWNhdG9yLWF2/YXRhci1pc29sYXRl/ZC1vbi10cmFuc3Bh/cmVudC1iYWNrZ3Jv/dW5kLWZyZWUtcG5n/LnBuZw"
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
    </div>
    </>
  )
}

export default NavBar
