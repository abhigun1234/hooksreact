import React, { useEffect, useState } from 'react';

function UseEffectHook(props) {
    const[count,setCount]=useState(0)
    useEffect(()=>{
        document.title=`You clicked ${count} times`
    })
    return (
        <div>
          <button onClick={()=>setCount(count+1)}>{count}</button>  
        </div>
    );
}

export default UseEffectHook;