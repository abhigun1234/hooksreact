import React ,{useState} from 'react';

function HooksStateDemo(props) {
  
    const [counter,setCounter] =useState(1)
    const [name,setName] =useState('raj')
    return (
        <div>
          {counter}  
          {name}
          <button onClick={()=>setCounter(counter+1)}>counter</button>
          <button onClick={()=>setName('rahul')}>set name</button>
        </div>
    );
}

export default HooksStateDemo;