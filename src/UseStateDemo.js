import React, { useState } from 'react';

function UseStateDemo(props) {
     const  [counter,SetCounter]= useState({})
     const  [person,setPersonData]= useState({name:'abhi'})
     const [name,setName]=useState("ravi")
     function onCallSetState(){

        setName("abhi")
     }
    return (
        <div>
           {counter} 
           {name}
           {/* {person.name} */}
           <button onClick={onCallSetState}>setName</button>
        </div>
    );
}

export default UseStateDemo;