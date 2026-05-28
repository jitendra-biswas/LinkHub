import React from 'react'
import Homepage from './Pages/Homepage'
import { Routes,Route } from 'react-router-dom'
import Social_Media from './Pages/Social_Media'
import SideBar from '../src/Components/SideBar'
import NavBar from './Components/NavBar'
import Entertainment from './Pages/Entertainment'
import Ai_Tools from './Pages/Ai_Tools'
import Productivity from './Pages/Productivity'
import Developer_tools from './Pages/Developer_tools'
import Shopping from './Pages/Shopping'
import Search_And_Info from './Pages/Search_And_Info'

const App = () => {
  return (
    <>
    <NavBar />
    <div className='flex'>
      <div className="left"><SideBar /></div>
      <div className="right w-full h-fit bg-linear-65 from-[#0e1124] to-[#0C0F21] pt-15">
        <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/social_media' element={<Social_Media />} />
        <Route path='/entertainment' element={<Entertainment />} />
        <Route path='/ai_tools' element={<Ai_Tools />} />
        <Route path='/procuctivity' element={<Productivity />} />
        <Route path='/developer_tools' element={<Developer_tools />} />
        <Route path='/shopping' element={<Shopping/>} />
        <Route path='/search' element={<Search_And_Info/>} />
      </Routes>
      </div>
      
      
    </div>
    </>
  )
}

export default App
