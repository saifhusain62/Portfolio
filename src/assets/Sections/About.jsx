import React from 'react'


function About() {

  const skills = [
    "HTML5,","CSS3,","JavaScript,","TypeScript,","BootStrap,","TailwindCSS,","React,","Next.js,","GSAP,","FramerMotion,","three.js,","Vue.js,","Angular,","Node.js,","Express.js,","MongoDB,","Graphql,","Mysql"
  ]
  return (
    <section id="about" className='min-h-screen font-mono flex items-center justify-center py-20 mt-80 '>
             
             {/* ABOUT ME */}
      <div className='max-w-3xl mx-auto px-4'>
        <h2 className='max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center'>About Me</h2>
        
        <div className='p-8 mb-6 rounded-xl border-1 border-white hover:-translate-y-1 transation-all'>
          <p className='text-gray-300 mb-5 text-xl text-center'>
           "Passionate full-stack developer specializing in MERN & MEAN stacks, crafting scalable, high-performance web applications with clean code and intuitive user experiences."
            </p>
          
          </div>
               {/* SKILL */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
              
              <h3 className='text-2xl text-center font-bold mb-8'>Skills</h3>
              <div className='flex justify-center flex-wrap gap-2'>
                {skills.map((skill,index)=><span key={index} className='bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-balance hover:bg-blue-200/20 hover:shadow-[9_2px_8px_rgba(59,130,22,46,0.2)] transition'>{skill}</span>)}</div>
             
              
            </div>
                      {/* EDUCATION */}
          <div className='p-6 hover:-translate-y-1 transition-all'>
            <h3 className='text-2xl text-center font-bold mb-8'>Education</h3>
            <ul className='pl-5 list-disc list-inside text-lg text-gray-300 space-y-1'>

              <li>
                <strong><em>B.S.C in Computer Science<br></br></em></strong>
                Northern University bangladesh
              </li>
              <li>
                <strong><em>H.S.C in Science<br></br></em></strong>
                Jessore Govt. City College
              </li>
              <li>
                <strong><em>S.S.C in Science<br></br></em></strong>
                D.H.M.M High School,Jessore
              </li>

            </ul>
          </div>

                  {/* EXPERIENCE */}
           
          <div className='p-6 hover:-translate-y-1 transition-all'>
            <h3 className='text-2xl text-center font-bold mb-8'>Experience</h3>
            <ul className='pl-5 list-disc list-inside text-lg text-gray-300 space-y-1'>

              <li>
                <strong><em>Softvence Agency<br></br></em></strong>
                Front-End Developer-Onsite
              </li>
              <li>
                <strong><em>Digicare BD<br></br></em></strong>
                Wordpress & Full Stack developer-Remote
              </li>
              <li>
                <strong><em>M.T Digital Service<br></br></em></strong>
                Wordpress & Full Stack developer-Remote
              </li>

            </ul>
          </div>

              {/* CERTIFICATE */}

          <div className='p-6 hover:-translate-y-1 transition-all'>
            <h3 className='text-2xl text-center font-bold mb-8'>Certificate</h3>
            <ul className='pl-5 list-disc list-inside text-lg text-gray-300 space-y-1'>

              <li>
                <strong><em>Itronic Solution,India<br></br></em></strong>
                Complete React-Course
              </li>
              <li>
                <strong><em>KG Coding,India<br></br></em></strong>
                HTML Course
              </li>
              <li>
                <strong><em>Itronic Solution,India<br></br></em></strong>
                Complete C & C++ Programing
              </li>

            </ul>
          </div>
          

          </div>

        
        
        </div>
      
    </section>
  )
}

export default About
