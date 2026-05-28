import React from 'react'
import TabCards from '../Components/TabCards'

const Search_And_Info = () => {
  const search_and_info_data = [
  {
    name: "Google",
    link: "https://www.google.com",
    image: "./search/google.png",
    desc: "World’s most popular search engine for web information"
  },
  {
    name: "Wikipedia",
    link: "https://www.wikipedia.org",
    image: "./search/wikipedia.png",
    desc: "Free online encyclopedia with millions of articles"
  },
  {
    name: "Bing",
    link: "https://www.bing.com",
    image: "./search/bing.png",
    desc: "Microsoft search engine with AI-powered search features"
  },
  {
    name: "DuckDuckGo",
    link: "https://duckduckgo.com",
    image: "./search/duck_duck_go.png",
    desc: "Privacy-focused search engine without user tracking"
  },
  {
    name: "Yahoo!",
    link: "https://www.yahoo.com",
    image: "./search/yahoo.png",
    desc: "Web portal offering search, news, email, and more"
  },
  {
    name: "Brave Search",
    link: "https://search.brave.com",
    image: "./search/brave.png",
    desc: "Independent privacy-first search engine by Brave"
  },
  {
    name: "Perplexity AI",
    link: "https://www.perplexity.ai",
    image: "./search/perplexity.png",
    desc: "AI-powered search and answer engine with cited responses"
  }
];
  return (
    <>
     <div className='min-h-screen pt-7 pb-5 px-5 ml-65 max-lg:ml-20'>
       <div className="w-fit header-text text-zinc-200 px-7 py-8 border-2 border-zinc-400/10 rounded-xl">
          <h1 className="text-3xl font-semibold">🔍Search & Info</h1>
          <p className="text-gray-400 mt-2">Powerful platforms and tools for modern software development.</p>
    </div>
   <div className='flex flex-wrap gap-5'>
     {search_and_info_data.map((search_and_info,idx)=>{
        return <TabCards key={idx} name={search_and_info.name} link={search_and_info.link} image={search_and_info.image}/>
    })}
   </div>
    </div>
    </>
  )
}

export default Search_And_Info
