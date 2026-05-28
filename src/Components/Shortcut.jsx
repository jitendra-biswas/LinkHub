import React from 'react'

const Shortcut = (props) => {
  return (
    <>
   <a href={props.link} target='_blank'>
     <div className='shortcut-container cursor-pointer hover:scale-105 bg-[#21243C] w-20 py-2 flex flex-col items-center justify-center rounded-xl'>
            <div className="image w-12 h-12 rounded-xl overflow-hidden">
                <img src={props.image} alt="" className='w-full h-full object-cover object-center'/>
            </div>
            <p className='text-[10px] font-semibold h-fit mt-1'>{props.name}</p>
          </div>
   </a>
    </>
  )
}

export default Shortcut
