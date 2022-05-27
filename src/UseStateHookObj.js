import React, { useState } from 'react';

function UseStateHookObj(props) {

    const [person,setInfo]=useState({firstName:'',lastName:'',age:'23',gender:'M'})
    function setFirstName(e){
           console.log("e",e)
          setInfo({...person,firstName:e.target.value})


    }
    function lastName(e){
        console.log("e",e)
        setInfo({...person,lastName:e.target.value})


  }
  function gender(e){


  }
    return (
        <div>
            <input onChange={setFirstName} type="text" value={person.firstName} placeholder="enter your name"></input>
            <input onChange={lastName} type="text" value={person.lastName} placeholder="enter your last name"></input>
            <h2>Your first name is -  {person.firstName}</h2>
            <h2>Your last name is -  {person.lastName}</h2>
            {/* <h2>Your first name is -  {person.gender}</h2>
            <h2>Your last name is -  {person.age}</h2> */}
        </div>
    );
}

export default UseStateHookObj;