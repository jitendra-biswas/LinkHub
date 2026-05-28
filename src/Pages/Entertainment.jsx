import React from 'react'
import TabCards from '../Components/TabCards'

const Entertainment = () => {
   const Entertainment_data = [
  {
    name: "YouTube",
    link: "https://www.youtube.com",
    image: "./Entertainment/youtube.png",
    desc: "Watch and share videos worldwide"
  },
  {
    name: "Netflix",
    link: "https://www.netflix.com",
    image: "./Entertainment/netflix.png",
    desc: "Stream movies and TV shows"
  },
  {
    name: "Disney+",
    link: "https://www.disneyplus.com",
    image: "./Entertainment/disney.png",
    desc: "Watch Disney, Marvel, and Pixar content"
  },
  {
    name: "Spotify",
    link: "https://www.spotify.com",
    image: "./Entertainment/spotify.webp",
    desc: "Listen to music and podcasts"
  },
  {
    name: "Prime Video",
    link: "https://www.primevideo.com",
    image: "./Entertainment/prime_video.png",
    desc: "Stream movies and Amazon originals"
  },
  {
    name: "HBO Max",
    link: "https://www.max.com",
    image: "./Entertainment/hbo_max.png",
    desc: "Premium movies and series streaming"
  },
  {
    name: "Hulu",
    link: "https://www.hulu.com",
    image: "./Entertainment/hulu.png",
    desc: "TV shows, movies, and live TV"
  },
  {
    name: "Apple TV+",
    link: "https://tv.apple.com",
    image: "./Entertainment/apple_tv.png",
    desc: "Apple original shows and movies"
  },
  {
    name: "SoundCloud",
    link: "https://soundcloud.com",
    image: "./Entertainment/soundcloud.png",
    desc: "Discover and stream music"
  },
  {
    name: "Twitch",
    link: "https://www.twitch.tv",
    image: "./Entertainment/twitch.png",
    desc: "Live gaming and streaming content"
  },
  {
    name: "Hotstar",
    link: "https://www.hotstar.com",
    image: "./Entertainment/hotstar.png",
    desc: "Sports, movies, and TV shows"
  },
  {
    name: "Crunchyroll",
    link: "https://www.crunchyroll.com",
    image: "./Entertainment/crunchyroll.png",
    desc: "Watch anime and Asian dramas"
  },
  {
    name: "Vimeo",
    link: "https://vimeo.com",
    image: "./Entertainment/vimeo.png",
    desc: "High-quality video hosting and sharing"
  }
];
  return (
    <>
    <div className='pt-7 pb-5 px-5 ml-65 max-lg:ml-20'>
       <div className="w-fit header-text text-zinc-200 px-7 py-8 border-2 border-zinc-400/10 rounded-xl">
          <h1 className="text-3xl font-semibold">🎬Entertainment</h1>
          <p className="text-gray-400 mt-2">Platforms and tools to stream, watch, and enjoy entertainment worldwide.</p>
    </div>
   <div className='flex flex-wrap gap-5'>
     {Entertainment_data.map((entertainment,idx)=>{
        return <TabCards key={idx} name={entertainment.name} link={entertainment.link} image={entertainment.image} desc={entertainment.desc}/>
    })}
   </div>
    </div>
    </>
  )
}

export default Entertainment
