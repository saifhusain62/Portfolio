import React from 'react'

function Contact() {
  return (
    <section id='contact' className='min-h-screen font-mono flex items-center justify-center py-20'>
      <div className='px-4 w-150'>
        <h2 className='max-w-[1440px] text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500  to-indigo-600 bg-clip-text text-transparent text-center'>Get In Touch</h2>
               {/* NAME */}
        <form action="https://formsubmit.co/saimumsaif62@gmail.com" className='space-y-6' method="POST">
          <div className='relative'>
            <input type="text" id='name' name='name' placeholder='Name' required className='w-full bg-white/10 border border-rwhite/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500'/>

          </div>
             {/* EMAIL */}
          <div className='relative'>
            <input type="email" id='email' name='email' 
             rows={6} placeholder='example@gmail.com' required className='w-full bg-white/10 border border-rwhite/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500'/>

          </div>
          {/* TEXTAREA */}
          <div className='relative'>
            <textarea type="text" id='text' name='text' placeholder='Text Here...' required className='w-full bg-white/10 border border-rwhite/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500'/>

          </div>
          <button type='submit' className='w-full bg-gradient-to-r flex justify-center cursor-pointer from-teal-500 to-indigo-600 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-1 py-3' >Submit

          </button>
          

        </form>

      </div>
    </section>
  )
}

export default Contact
