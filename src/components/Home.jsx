import React from 'react'
import { useState } from 'react'



function Home() {

    const [Elements, setElements] = useState([
        { text: 'Ayush', color: '#ef5350' },
        // { text1: 'Developer', color: '#000000' },
        // { text2: 'Coder', color: '#000000' },
      ]);



  return (
    <div className=' w-full h-screen bg-zinc-900 '>
    
    <div className='max-w-[10000px] mx-auto px-16 flex flex-col h-full pt-16'>
    

    {Elements.map((element, index) => (
                  <h1 className="text-white font-[400] text-7xl pt-5 pl-6" >
                  <h1 className='text-white'> Hello. </h1>
                  <div className='flex gap-3'>
                  <h1  className=' '> I am</h1>
                  <h1  className='' style={{ color: element.color }}> {element.text}</h1>
                    
                  </div>
                  </h1>
                  
                ))}

                <div className="text-white font-[300] text-5xl pt-5 pl-6" >
                <p className="text-white font-[300] text-5xl pt-5 pl-6"><span className='text-red-500'>const</span> name = <span className='text-sky-400'>'Ayush';</span></p>
                <p className="text-white font-[300] text-5xl pt-5 pl-6"><span className='text-orange-500'>Developer</span> dev = <span className='text-red-500'>new</span><span className='text-orange-500'> Developer</span>(name);</p>
                

                <div className="text-white font-[300] text-5xl pt-5" >
                <p className="text-white font-[300] text-5xl pt-5 pl-6"><span className="text-red-500">while</span>(dev.<span className="text-purple-500">isCoding</span>( ) )</p>
                <p className="text-white font-[300] text-5xl pt-5 ml-16 pl-1 "><span className="text-orange-500k ml-16 pl-16">(dev.<span className="text-purple-500">listenToMusic</span>( );</span></p>
                <p className="text-white font-[300] text-5xl pt-5 ml-16 pl-1 "><span className="text-orange-500k ml-16 pl-16">(dev.<span className="text-purple-500">openStackOverFlow</span>( );</span></p>
                
                {/* <span className="text-red-500">while</span>(dev.<span className="text-orange-500">isCoding</span>()){
                <span className="text-orange-500k">listenToMusic</span>
	            <span className="text-orange-500">openStackOverFlow</span>
                </div> */}
                
                </div>

                </div>
    </div>
    
    </div>
   
        
  )
}

export default Home

// bg-zinc-900