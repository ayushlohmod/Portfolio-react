import React from 'react'

const Navbar = () => {
  return (
    // <div className='container'>
    <div className="fixed w-full h-[60px] flex justify-between items-center px-4 bg-zinc-800">
      
      <div className='flex items-center px-16 text-white text-lg'>
      <h1>  ayush / </h1>
      
      </div>
        <ul className='flex text-zinc-400 gap-3 pr-16'>
          <li><a className='' href='#home' > Home </a></li>
          <li><a className='' href='#about'>About</a> </li>
          <li><a className='' href='#projects'>Projects</a></li>
          <li><a className='' href='#background'>Background</a></li>
        </ul>
      </div>
    
    // </div>
  )

}

export default Navbar