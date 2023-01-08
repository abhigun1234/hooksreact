// import React ,{useState} from 'react';

// function HooksStateDemo(props) {
  
//     const [counter,setCounter] =useState(1)
//     const [name,setName] =useState('raj')
//     return (
//         <div>
//           {counter}  
//           {name}
//           <button onClick={()=>setCounter(counter+1)}>counter</button>
//           <button onClick={()=>setName('rahul')}>set name</button>
//         </div>
//     );
// }

// export default HooksStateDemo;



import React, { useState } from 'react';

function HooksStateDemo(props) {
  const [name,setName]=useState("ram")
  const [value,setValue]=useState(1)
  function setData(){

    setName("raj")
    
  }

  function incriment(){

    setValue(2)
  }
  return (
    <div>
      {name}
      {value}
      <button onClick={setData}>set</button>
      <button onClick={incriment}>+</button>
    </div>
  );
}

export default HooksStateDemo;