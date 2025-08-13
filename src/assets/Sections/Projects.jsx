import React, { useState } from 'react'
import Project1 from "../images/project-1.jpg"
import Project2 from "../images/project-2.jpg"
import Project3 from "../images/project-3.jpg"
import Project4 from "../images/project-4.jpg"

function Projects() {
  const [project] = useState([
    {image:Project1,
       name:"Music App",
       brief:"Our music platform lets you stream high-quality tracks, discover new artists, and create your own playlists—all in one.",
      },
        {image:Project2,
       name:"Photoes Web",
       brief:"Showcase, share, and cherish your moments with our photography platform. Upload your best shots, create .",
      },
        {image:Project3,
       name:"Resturent Web",
       brief:"Discover mouthwatering dishes, explore our menu, and order your favorites with just a few taps. From fresh ingredients.",
      },
        {image:Project4,
       name:"Realstate Web",
       brief:"Find your dream home with ease. Browse stunning properties, explore detailed listings, and connect with trusted agents—all.",
      },
  ]);
  return (
    <section id='projects' className='min-h-screen flex items-center font-mono justify-center py-20'>

      <div className='max-w-[1440px] mx-auto px-4'>
        <h2 className='max-w-[1440px] text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center'>
          Features Projects
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
            {project.map((project,index)=>(
              <div key={index} className='p-6 rounded-xl flex flex-col items-center text-center border-1 border-white hover:border-white hover:shadow-[9_2px_8px_rgba(59,130,246,0.2)] hover:-translate-y-1 transition-all hover:bg-blue-950'>
                  <h3 className='font-semibold text-xl mb-4'>
                       {project.name}
                  </h3>
                  <p className='text-gray-300 mb-4'>
                    {project.brief}
                  </p>
                  <div className='flex flex-wrap sm:items-center gap-2 mb-4 '>
                    {["React","Next.js","Node.js","Tailwind","Vercel"].map((tech, i) => (
                          <span
                           key={i}
                             className='bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-balance hover:bg-blue-200/20 hover:shadow-[9_2px_8px_rgba(59,130,22,46,0.2)] transition'
                             >
                              {tech}
                           </span>
                          ))}
                        <div className='flex flex-col text-center my-5 py-3 justify-center gap-3 border-2 border-white hover:border-blue-300 hover:shadow-[9_2px_8px_rgba(59,130,22,46,0.2)] cursor-pointer rounded-xl'>

                               <p className='text-gray-200'>View Project</p>
                               <a href="https://github.com/saifhusain62" className='flex justify-between items-center font-bold text-blue-400 transition-colors hover:text-white'>
                                       
                                       <img src={project.image} alt={`${project.name}Image`} className='border  rounded-[10px]'/>
                                    
                               </a>
                          </div>  
                  </div>
              </div>
            ))}

          </div>
        
        </div>
      
    </section>
  )
}

export default Projects
