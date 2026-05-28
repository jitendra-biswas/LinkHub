import React from 'react'
import TabCards from '../Components/TabCards'

const Social_Media = (props) => {
 const social_media_data = [
  {
    name: "Facebook",
    link: "https://www.facebook.com",
    image: "./Social_media/facebook.png",
    desc: "Connect with friends and communities"
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com",
    image: "./Social_media/instagram.png",
    desc: "Share photos and short videos"
  },
  {
    name: "X (Twitter)",
    link: "https://www.x.com",
    image: "./Social_media/twitter.png",
    desc: "Follow news and trending topics"
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com",
    image: "./Social_media/linkedin.png",
    desc: "Professional networking and jobs"
  },
  {
    name: "Reddit",
    link: "https://www.reddit.com",
    image: "./Social_media/reddit.png",
    desc: "Join communities and discussions"
  },
  {
    name: "WhatsApp",
    link: "https://www.whatsapp.com",
    image: "./Social_media/whatsapp.png",
    desc: "Instant messaging and calls"
  },
  {
    name: "Telegram",
    link: "https://telegram.org",
    image: "./Social_media/telegram.png",
    desc: "Fast and secure messaging platform"
  },
  {
    name: "Snapchat",
    link: "https://www.snapchat.com",
    image: "./Social_media/snapchat.png",
    desc: "Share moments with friends"
  },
  {
    name: "TikTok",
    link: "https://www.tiktok.com",
    image: "./Social_media/tiktok.png",
    desc: "Short-form entertainment videos"
  },
  {
    name: "Pinterest",
    link: "https://www.pinterest.com",
    image: "./Social_media/pinterest.jpg",
    desc: "Discover ideas and inspiration"
  },
  {
    name: "Discord",
    link: "https://discord.com",
    image: "./Social_media/discord.png",
    desc: "Community chats and gaming servers"
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com",
    image: "./Social_media/youtube.png",
    desc: "Watch and share videos"
  },
  {
    name: "Threads",
    link: "https://www.threads.net",
    image: "./Social_media/threads.png",
    desc: "Text-based social conversations"
  },
  {
    name: "Tumblr",
    link: "https://www.tumblr.com",
    image: "./Social_media/tumblr.png",
    desc: "Blogging and creative posts"
  },
  {
    name: "Messenger",
    link: "https://www.messenger.com",
    image: "./Social_media/messenger.png",
    desc: "Chat with Facebook friends"
  },
  {
    name: "WeChat",
    link: "https://www.wechat.com",
    image: "./Social_media/wechat.png",
    desc: "Messaging and social platform"
  },
  {
    name: "Skype",
    link: "https://www.skype.com",
    image: "./Social_media/skype.png",
    desc: "Video calls and communication"
  },
  {
    name: "Viber",
    link: "https://www.viber.com",
    image: "./Social_media/viber.png",
    desc: "Free messaging and calls"
  }
];
  return (
    <>
    <div className='pt-7 pb-5 px-5 ml-65 max-lg:ml-20'>
       <div className="w-fit header-text text-zinc-200 px-7 py-8 border-2 border-zinc-400/10 rounded-xl">
          <h1 className="text-3xl font-semibold">🌐Social Media</h1>
          <p className="text-gray-400 mt-2">Platforms and tools to connect, share content, and engage with communities worldwide.</p>
    </div>
   <div className='flex flex-wrap gap-5'>
     {social_media_data.map((social_media,idx)=>{
        return <TabCards key={idx} name={social_media.name} link={social_media.link} image={social_media.image} desc={social_media.desc}/>
    })}
   </div>
    </div>
    
    </>
  )
}

export default Social_Media
