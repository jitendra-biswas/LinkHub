import React from 'react'

const TabCards = (props) => {
  return (
    <>
      <div className='w-72 max-md:w-full max-lg:w-[40%] bg-[#14172a]  mt-10 p-5  text-zinc-200 rounded-xl'>
        <div className="image w-13 h-13 rounded-xl overflow-hidden">
                <img src={props.image} alt="" className='w-full h-full object-cover object-center'/>
            </div>
            <h1 className='text-xl font-bold'>{props.name}</h1>
            <p className=' text-gray-400'>{props.desc}</p>
            <div className="link border-t-2 border-gray-500/10 mt-4 flex items-center pt-2 justify-between">
            <p className=' text-gray-500'>{props.link.split(".").slice(-2).join(".")}</p> <a href={props.link} target='_blank'><i className="ri-external-link-line text-xl text-gray-500"></i></a>
            </div>
      </div>
    </>
  )
}

export default TabCards
