import React,{useState} from 'react';

function Counter(props) {
    const [name,setCount]=useState('ashu')
    return (
        <div>
            {name}
         <button onClick={()=>setCount('nikki')}>counter</button>   
        </div>
    );
}

export default Counter;