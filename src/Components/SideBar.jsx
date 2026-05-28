import React, { useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";

const SideBar = () => {
  const tabs = [
    { title: "Home", icon: "ri-home-4-fill", route_path:"/" },
    { title: "Social Media", icon: "ri-chat-heart-line", route_path:"/social_media" },
    { title: "Entertainment", icon: "ri-clapperboard-ai-line",route_path:"/entertainment" },
    { title: "AI Tools", icon: "ri-network-error-line" ,route_path:"/ai_tools"},
    { title: "Procuctivity", icon: "ri-douban-line" ,route_path:"/procuctivity" },
    { title: "Developers Tools", icon: "ri-git-pull-request-line" ,route_path:"/developer_tools"},
    { title: "Shopping", icon: "ri-shopping-cart-line" ,route_path:"/shopping" },
    { title: "Search & Info", icon: "ri-seo-line" ,route_path:"/search"},
  ];

  const favourites = [
    {
      title: "YouTube",
      img: "./Entertainment/youtube.png",
      link: "https://www.youtube.com",
    },
    {
      title: "ChatGPT",
      img: "./Ai_tools/chatgpt.png",
      link: "https://chat.openai.com",
    },
    {
      title: "Gmail",
      img: "./productivity/gmail.webp",
      link: "https://mail.google.com",
    },
    {
      title: "GitHub",
      img: "developer_tools/github.webp",
      link: "https://github.com",
    },
    {
      title: "Spotify",
      img: "./Entertainment/spotify.webp",
      link: "https://www.spotify.com",
    },
  ];

  const [activeTab, setActiveTab] = useState("Home");
 const location = useLocation();
 const navigate = useNavigate();
  return (
    <>
      <div className="sidebar fixed w-65 max-lg:w-fit h-screen bg-[#0C0F21] overflow-hidden p-5 max-sm:p-1 border-r-2 border-r-zinc-600/40">

        {/* Tabs */}
        <div className="tabs mt-18 flex flex-col transition-all border-b-2 border-b-gray-300/10">
          {tabs.map((tab) => {
            return (
              <div
                key={tab.title}
                onClick={() => {
                  navigate(tab.route_path)
                }}
                className={`home flex items-center gap-2 text-gray-300  py-1.5 pl-3 rounded-xl cursor-pointer ${location.pathname === tab.route_path ? "bg-[#23276C]": ""}`}
              >
                <i className={`${tab.icon} text-xl text-[#a8b0da]`}></i>
                <p className="hover:scale-115 w-full hover:pl-2 max-lg:hidden">{tab.title}</p>
              </div>
            );
          })}
        </div>

        {/* favourites */}
        <div className="favourites pt-5 flex flex-col gap-1">
          <div className="flex items-center gap-2 text-gray-300  py-1.5 pl-3">
            <i className="ri-heart-3-fill text-red-600 text-xl"></i>{" "}
            <p className="max-lg:hidden">Favourites</p>
          </div>
          {favourites.map((favourate) => {
            return (
              <a key={favourate.title} href={favourate.link} target="_blank">
                <div
                  className={`home flex items-center gap-2.5 text-gray-300  py-1.5 px-2 rounded-xl cursor-pointer`}
                >
                  <div className="w-8 h-7 rounded-full overflow-hidden">
                    <img
                      src={favourate.img}
                      className="w-full h-full object-cover object-center"
                      alt=""
                    />
                  </div>
                  <p className="hover:scale-115 w-full hover:pl-3 max-lg:hidden">
                    {favourate.title}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SideBar;
