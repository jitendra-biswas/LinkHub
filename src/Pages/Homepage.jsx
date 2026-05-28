import React from 'react'
import Card from '../Components/Card.jsx'
import ShortcutsData from "../ShortcutsData.js";
const Homepage = () => {
  return (
    <>
     <div className="min-h-screen  pt-7 max-sm:pt-3 px-10 max-sm:px-2 ml-65 max-lg:ml-20 max-sm:ml-15">
        <div className="header-text text-zinc-200 ">
          <h1 className="text-3xl font-semibold">Good morning,👋</h1>
          <p className="text-gray-400">Access your favorite websites quickly</p>
        </div>

        <div className="card-container w-full pt-5 grid grid-cols-2 gap-3 max-md:flex max-md:flex-col ">
          {ShortcutsData.map((card,index) => {
            return (
              <Card
                key={index}
                category={card.category}
                icon={card.icon}
                tab = {card.tab}
                shortcuts={card.shortcuts}
              />
              
            );
          })}
        </div>
      </div>
    </>
  )
}

export default Homepage
