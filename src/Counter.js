import React,{useState} from 'react';

function Counter(props) {
    const [count,setCount]=useState(0)
    return (
        <div>
            {count}
         <button onClick={()=>setCount(count+1)}>counter</button>   
        </div>
    );
}

export default Counter;