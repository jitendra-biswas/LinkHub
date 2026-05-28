import React from 'react'
import TabCards from '../Components/TabCards'

const Ai_Tools = () => {
 const AI_Tools_Data = [
  {
    name: "ChatGPT",
    link: "https://chat.openai.com",
    image: "./Ai_tools/chatgpt.png",
    desc: "AI assistant for writing, coding, and learning"
  },
  {
    name: "Gemini",
    link: "https://gemini.google.com",
    image: "./Ai_tools/gemini.png",
    desc: "Google AI for search, writing, and reasoning"
  },
  {
    name: "Claude",
    link: "https://claude.ai",
    image: "./Ai_tools/claude.png",
    desc: "AI for long writing, analysis, and coding help"
  },
  {
    name: "Perplexity",
    link: "https://www.perplexity.ai",
    image: "./Ai_tools/perplexity.png",
    desc: "AI-powered answer engine and research tool"
  },
  {
    name: "Midjourney",
    link: "https://www.midjourney.com",
    image: "./Ai_tools/midjourney.png",
    desc: "AI tool for generating high-quality images"
  },

  {
    name: "Leonardo AI",
    link: "https://leonardo.ai",
    image: "./Ai_tools/leonardo.png",
    desc: "AI image generation and creative art tool"
  },
  {
    name: "Canva AI",
    link: "https://www.canva.com/ai-image-generator/",
    image: "./Ai_tools/canva.png",
    desc: "AI-powered design and content creation"
  },
  {
    name: "Grammarly",
    link: "https://www.grammarly.com",
    image: "./Ai_tools/grammarly.png",
    desc: "AI writing and grammar correction tool"
  },
  {
    name: "Copy.ai",
    link: "https://www.copy.ai",
    image: "./Ai_tools/copy_ai.png",
    desc: "AI tool for marketing and content writing"
  },
  {
    name: "Jasper AI",
    link: "https://www.jasper.ai",
    image: "./Ai_tools/jasper.png",
    desc: "AI writing assistant for businesses"
  },
  {
    name: "Notion AI",
    link: "https://www.notion.so/product/ai",
    image: "./Ai_tools/notion.png",
    desc: "AI integrated productivity and writing assistant"
  },
  {
    name: "DeepL",
    link: "https://www.deepl.com",
    image: "./Ai_tools/deepl.png",
    desc: "AI-powered translation tool"
  },
  {
    name: "Runway ML",
    link: "https://runwayml.com",
    image: "./Ai_tools/runway_ml.png",
    desc: "AI video editing and generation tool"
  },

  {
    name: "Flow (Google Flow)",
    link: "https://labs.google/fx/tools/flow/",
    image: "./Ai_tools/flow.png",
    desc: "AI tool for cinematic video creation and storytelling"
  },
  {
    name: "Suno AI",
    link: "https://suno.com",
    image: "./Ai_tools/suno.png",
    desc: "AI music generator from text prompts"
  },
  {
    name: "ElevenLabs",
    link: "https://elevenlabs.io",
    image: "./Ai_tools/elevenlabs.png",
    desc: "AI voice generator and speech cloning tool"
  }
];
  return (
    <>
    <div className=' pt-7 pb-5 px-5 ml-65 max-lg:ml-20'>
       <div className="w-fit header-text text-zinc-200 px-7 py-8 border-2 border-zinc-400/10 rounded-xl">
          <h1 className="text-3xl font-semibold">🤖AI Tools</h1>
          <p className="text-gray-400 mt-2">AI tools to create, automate, and boost productivity effortlessly.</p>
    </div>
   <div className='flex flex-wrap gap-5'>
     {AI_Tools_Data.map((ai_tools,idx)=>{
        return <TabCards key={idx} name={ai_tools.name} link={ai_tools.link} image={ai_tools.image} desc={ai_tools.desc}/>
    })}
   </div>
    </div>
    </>
  )
}

export default Ai_Tools
