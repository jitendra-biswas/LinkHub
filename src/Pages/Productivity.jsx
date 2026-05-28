import React from 'react'
import TabCards from '../Components/TabCards'

const Productivity = () => {
    const Productivity_data = [
  {
    name: "Gmail",
    link: "https://mail.google.com",
    image: "./productivity/gmail.webp",
    desc: "Email service for communication and productivity"
  },
  {
    name: "Google Drive",
    link: "https://drive.google.com",
    image: "./productivity/drive.png",
    desc: "Cloud storage platform to store and share files"
  },
  {
    name: "Google Docs",
    link: "https://docs.google.com",
    image: "./productivity/docs.png",
    desc: "Online document editor for writing and collaboration"
  },
  {
    name: "Notion",
    link: "https://www.notion.so",
    image: "./productivity/notion.png",
    desc: "Workspace for notes, tasks, and project management"
  },
  {
    name: "Microsoft 365",
    link: "https://www.microsoft.com/microsoft-365",
    image: "./productivity/microsoft365.png",
    desc: "Office suite with Word, Excel, PowerPoint, and more"
  }
  ,
  {
    name: "Figma",
    link: "https://www.figma.com",
    image: "./productivity/figma.png",
    desc: "Collaborative interface and UI/UX design tool"
  },
  {
    name: "Trello",
    link: "https://trello.com",
    image: "./productivity/trello.png",
    desc: "Kanban-style project and task management tool"
  },
  {
    name: "Slack",
    link: "https://slack.com",
    image: "./productivity/slack.png",
    desc: "Team communication and collaboration platform"
  },
  {
    name: "Zoom",
    link: "https://zoom.us",
    image: "./productivity/zoom.png",
    desc: "Video conferencing and online meeting platform"
  },
  {
    name: "Canva",
    link: "https://www.canva.com",
    image: "./productivity/canva.png",
    desc: "Graphic design platform for presentations and social media"
  },
  {
    name: "Evernote",
    link: "https://evernote.com",
    image: "./productivity/evernote.png",
    desc: "Note-taking and organization application"
  },
  {
    name: "Dropbox",
    link: "https://www.dropbox.com",
    image: "./productivity/dropbox.png",
    desc: "Cloud storage and file synchronization service"
  },
  {
    name: "ClickUp",
    link: "https://clickup.com",
    image: "./productivity/clickup.png",
    desc: "All-in-one productivity and project management tool"
  },
  {
    name: "Asana",
    link: "https://asana.com",
    image: "./productivity/asana.png",
    desc: "Work management platform for teams and projects"
  },
  {
    name: "Todoist",
    link: "https://todoist.com",
    image: "./productivity/todoist.png",
    desc: "Task manager and daily productivity planner"
  }
];
  return (
    <>
     <div className='pt-7 pb-5 px-5 ml-65 max-lg:ml-20'>
       <div className="w-fit header-text text-zinc-200 px-7 py-8 border-2 border-zinc-400/10 rounded-xl">
          <h1 className="text-3xl font-semibold">📁Productivity</h1>
          <p className="text-gray-400 mt-2">Productivity tools to organize, manage, and achieve more daily.</p>
    </div>
   <div className='flex flex-wrap gap-5'>
     {Productivity_data.map((productivity,idx)=>{
        return <TabCards key={idx} name={productivity.name} link={productivity.link} image={productivity.image} desc={productivity.desc}/>
    })}
   </div>
    </div>
    </>
  )
}

export default Productivity
