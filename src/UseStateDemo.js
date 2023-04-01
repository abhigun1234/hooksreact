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
         {name}
        </div>
    );
}

export default UseStateDemo;