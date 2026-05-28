import React from 'react'
import TabCards from '../Components/TabCards'

const Developer_tools = () => {
   const Developer_tools_data = [
  {
    name: "GitHub",
    link: "https://github.com",
    image: "./developer_tools/github.webp",
    desc: "Platform for hosting, sharing, and collaborating on code"
  },
  {
    name: "Stack Overflow",
    link: "https://stackoverflow.com",
    image: "./developer_tools/stack_overflow.png",
    desc: "Developer community for coding questions and solutions"
  },
  {
    name: "CodePen",
    link: "https://codepen.io",
    image: "./developer_tools/code_pen.png",
    desc: "Online editor for front-end web development projects"
  },
  {
    name: "JSFiddle",
    link: "https://jsfiddle.net",
    image: "./developer_tools/jsf_iddle.png",
    desc: "Web-based playground for testing HTML, CSS, and JavaScript"
  },
  {
    name: "Replit",
    link: "https://replit.com",
    image: "./developer_tools/replit.png",
    desc: "Cloud-based coding environment and compiler"
  },
  {
    name: "Visual Studio Code",
    link: "https://code.visualstudio.com",
    image: "./developer_tools/vscode.png",
    desc: "Popular source-code editor with powerful extensions"
  },
  {
    name: "GitLab",
    link: "https://gitlab.com",
    image: "./developer_tools/gitlab.png",
    desc: "DevOps platform for source control and CI/CD pipelines"
  },
  {
    name: "Netlify",
    link: "https://www.netlify.com",
    image: "./developer_tools/netlify.png",
    desc: "Platform for deploying and hosting modern web applications"
  },
  {
    name: "Vercel",
    link: "https://vercel.com",
    image: "./developer_tools/vercel.png",
    desc: "Frontend cloud platform for static sites and web apps"
  },
  {
    name: "Postman",
    link: "https://www.postman.com",
    image: "./developer_tools/postman.png",
    desc: "API testing and collaboration platform for developers"
  },
  {
    name: "Docker",
    link: "https://www.docker.com",
    image: "./developer_tools/docker.png",
    desc: "Containerization platform for building and running applications"
  },
  {
    name: "Firebase",
    link: "https://firebase.google.com",
    image: "./developer_tools/firebase.png",
    desc: "Backend platform for authentication, database, and hosting"
  },
  
  {
    name: "Dev.to",
    link: "https://dev.to",
    image: "./developer_tools/dev.png",
    desc: "Community platform for developers to share articles and ideas"
  }
];
  return (
    <>
    <div className='pt-7 pb-5 px-5 ml-65 max-lg:ml-20'>
       <div className="w-fit header-text text-zinc-200 px-7 py-8 border-2 border-zinc-400/10 rounded-xl">
          <h1 className="text-3xl font-semibold">💻Developer Tools</h1>
          <p className="text-gray-400 mt-2">Powerful platforms and tools for modern software development.</p>
    </div>
   <div className='flex flex-wrap gap-5'>
     {Developer_tools_data.map((developer,idx)=>{
        return <TabCards key={idx} name={developer.name} link={developer.link} image={developer.image} desc={developer.desc}/>
    })}
   </div>
    </div>
    </>
  )
}

export default Developer_tools
