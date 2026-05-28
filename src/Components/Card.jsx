import React from 'react'
import Shortcut from './Shortcut'
import {useNavigate} from 'react-router-dom'

const Card = (props) => {
  const navigate = useNavigate();
  return (
   <>
   <div className='w-fit min-h-32 bg-[#1A1E34] rounded-2xl text-gray-200 p-3 flex flex-col gap-3'>
       <header className='flex justify-between'>
        <h1 className='font-bold text-md'>{props.icon} {props.category}</h1>
        <p className='text-blue-500 cursor-pointer' onClick={()=>navigate(props.tab)}>View all</p>
       </header>
       <div className="container flex flex-wrap gap-3">
        {props.shortcuts.map((shortcut,idx)=>{
          return <Shortcut key={idx} image={shortcut.image} name={shortcut.name} link={shortcut.link}/>
        })}
         
         {/* add shortcut */}
          <div
           className='shortcut-container cursor-pointer hover:scale-105 bg-[#21243C] w-fit py-2 px-3 flex flex-col items-center justify-center rounded-xl'
           onClick={()=>navigate(props.tab)}
           >
            <div className=" w-13 h-13 rounded-xl overflow-hidden flex justify-center items-center border-1 border-gray-500 border-dashed">
                <div className='rotate-10'>⚡</div>
            </div>
            <p className='text-[12px] h-fit'>Visit</p>
          </div>
       </div>
       
   </div>
   </>
  )
}

export default Card
