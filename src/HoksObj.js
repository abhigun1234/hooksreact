import React from 'react';
import { useState } from 'react/cjs/react.development';

function HoksObj(props) {
    const [person,setName]=useState({firstname:'Raj',lastName:'sharma'})
   

    return (
        <div>
        {person.firstname}
        {person.lastName}
            <button onClick={()=>setName(person.firstname='ram')} >changename</button>
        </div>
    );
}

export default HoksObj;