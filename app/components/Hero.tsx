import React from 'react'

const Hero = () => {
  return (
    <section className='flex-grow p-4 bg-gray-400 justify-center h-screen'>
        <div className=' mx-auto px-4 flex flex-col min-h-screen'>
            <h1 className='text-2xl mb-4 text-purple-900'>My Journey</h1>
            <p className='text-2xl mb-6 font-black text-indigo-800'><b>As a programmer, my daily life is a unique blend of creativity and logic that constantly keeps me engaged.
             I start my mornings with a strong cup of Tea, diving into the code I wrote the day before, often losing track of time as I refine and optimize it. Each day brings its own set of challenges—whether
             it's debugging a complex piece of code or brainstorming innovative solutions for a new feature.
             
             However, the journey isn’t always smooth sailing. Late-night coding sessions and looming deadlines can be stressful,
             but they push me to think outside the box and hone my problem-solving skills. The programmer community is incredibly supportive,
             and I often find solace in connecting with others who share my passion. Every line of code I write not only
             contributes to my projects but also represents my commitment to creating something impactful in the digital world.
             </b></p>
        </div>
    </section>
  )
}

export default Hero