import React from 'react'
import TabCards from '../Components/TabCards'

const Shopping = () => {
  const Shopping_data = [
  {
    name: "Amazon",
    link: "https://www.amazon.com",
    image: "./Shopping/amazon.png",
    desc: "Global online marketplace for shopping and fast delivery"
  },
  {
    name: "eBay",
    link: "https://www.ebay.com",
    image: "./Shopping/ebay.png",
    desc: "E-commerce platform for auctions and online buying"
  },
  {
    name: "AliExpress",
    link: "https://www.aliexpress.com",
    image: "./Shopping/aliexpress.png",
    desc: "International shopping platform with affordable products"
  },
  {
    name: "Flipkart",
    link: "https://www.flipkart.com",
    image: "./Shopping/flipkart.png",
    desc: "Popular Indian online shopping and electronics platform"
  },
  {
    name: "Daraz",
    link: "https://www.daraz.com.np",
    image: "./Shopping/daraz.png",
    desc: "Leading online shopping platform in Nepal and South Asia"
  }
];
  return (
    <>
     <div className='min-h-screen pt-7 pb-5 px-5 ml-65 max-lg:ml-20'>
       <div className="w-fit header-text text-zinc-200 px-7 py-8 border-2 border-zinc-400/10 rounded-xl">
          <h1 className="text-3xl font-semibold">🛒Shopping</h1>
          <p className="text-gray-400 mt-2">Powerful platforms and tools for modern software development.</p>
    </div>
   <div className='flex flex-wrap gap-5'>
     {Shopping_data.map((shopping,idx)=>{
        return <TabCards key={idx} name={shopping.name} link={shopping.link} image={shopping.image} desc={shopping.desc}/>
    })}
   </div>
    </div>
    </>
  )
}

export default Shopping
