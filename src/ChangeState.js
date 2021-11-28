import React from 'react';
import { useState } from 'react';
// react 16.4
function ChangeState(props) {
    const[person,setCounter] =useState({name:'abhishek'})
    function setData(name){

        setCounter(name)
    }
    return (
        <div>
            {person.name}
            {/* <button onClick={()=>setData('neha')}>SetName</button> */}
        </div>
    );
}

export default ChangeState;