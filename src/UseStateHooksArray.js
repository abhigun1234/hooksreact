import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.production.min';

function UseStateHooksArray(props) {
    // useEffect(()=>{

    //     axios.

    // })
    const [personInfo, setPersonInfo] = useState([
        { name: 'abhi', email: 'abhi@gmail.com',phone:'8888888' }, 
    { name: 'ravi', email: 'ravi@gmail.com' ,phone:'8888888'},
    { name: 'ram', email: 'ram@gmail.com' ,phone:'8888888'},
    { name: 'neha', email: 'neha@gmail.com' ,phone:'8888888'},
    { name: 'priyanka', email: 'priyanka@gmail.com' ,phone:'8888888'}])
    return (
        <div>
            {personInfo.map(person =>
                <ul>
                    {
                        <div>
                            <li>{person.name}</li>
                            <li>{person.email}</li>
                            <li>{person.phone}</li>
                        </div>
                    }
                </ul>
            )}
        </div>
    );
}

export default UseStateHooksArray;