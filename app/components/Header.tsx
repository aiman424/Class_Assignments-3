import React from 'react'

const Header = () => {
  return (
      <header className='bg-gray-700 text-white p-5'>
        <div className='container mx-2 flex justify-between items-center'>
          <h1 className='text-2xl font-serif text-red-500'>My Next.js Website</h1>
         <nav>
            <ul className='flex space-x-4'>
                <li><a href="/" className='hover:text-pink-400 '>Home</a></li>
                <li><a href="/about" className='hover:text-pink-400'>About</a></li>
                <li><a href="/contact" className='hover:text-pink-400'>Contact</a></li>
                <li><a href="/skills" className='hover:text-pink-400'>Skills</a></li>
            </ul>
          </nav>
         </div>
      </header>
    
  )
}

export default Header
