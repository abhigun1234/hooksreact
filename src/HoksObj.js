import React from 'react';
import { useState } from 'react/cjs/react.development';

function HoksObj(props) {
    const [person,setName]=useState({firstname:'Raj',lastName:'sharma',address:"pune"})
   function setData(){
     person.firstname="ram"
    
   }
   
    return (
        <div>
        {person.firstname}
        {person.lastName}
        {person.address}
            {/* <button onClick={setData} >changename</button> */}
        </div>
    );
}

export default HoksObj;