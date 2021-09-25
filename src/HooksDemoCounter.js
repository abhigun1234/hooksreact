import React, { useState } from 'react';

function HooksDemoCounter(props) {
    const [count,setCounter]=useState(12)
    function increement(){

        setCounter(count+1)
    }
    return (
        <div>
            <label>{count}</label>
            <button onClick={increement}>click</button>
        </div>
    );
}

export default HooksDemoCounter;