import React,{useState,useEffect} from 'react';

function UseEffectWithoutArg(props) {
    useEffect(()=>{
        console.log("getting callecd")
    })
    return (
        <div>
            <input value></input>
        </div>
    );
}

export default UseEffectWithoutArg;