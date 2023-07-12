import React from 'react'
import { useState } from 'react'



// const User = (props) =>{
//     return(
//         <>
//             <h1>{props.name}</h1>
//             <h1>{props.developer}</h1>
//             <h1>{props.coder}</h1>
//         </>
//     )
// }

function Ayush() {

    const [Elements, setElements] = useState([
        { text: 'Ayush', color: '#ef5350' },
        { text: 'Developer', color: '#000000' },
        { text: 'Coder', color: '#000000' },
      ]);
   
  return (

    <div className="container mx-auto">
      <div className="row py-8">
        <h1 className="text-4xl font-bold">Hello.</h1>
      </div>

      <div className="row">
        <div className="col-auto">
          <h1 className="text-4xl font-bold">I am</h1>
        </div>
        <div className="col-auto">
          <div className="carousel">
            <div className="change_outer">
              <div className="change_inner">
                {Elements.map((element, index) => (
                  <h1
                    key={index}
                    className="element"
                    style={{ color: element.color }}
                  >
                    {element.text}
                  </h1>
                ))}
                </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}



export default Ayush