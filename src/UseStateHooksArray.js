import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.production.min';

function UseStateHooksArray(props) {
    // useEffect(()=>{

    //     axios.

    // })
    const [personInfo, setPersonInfo] = useState([
        { id:1,name: 'abhi', email: 'abhi@gmail.com',phone:'8888888',city:'mumbai' }, 
    { id:2,name: 'ravi', email: 'ravi@gmail.com' ,phone:'8888888',city:'pune'},
    {id:3, name: 'ram', email: 'ram@gmail.com' ,phone:'8888888',city:'nagpur'},
    { id:4,name: 'neha', email: 'neha@gmail.com' ,phone:'8888888',city:'solapur'},
    { id:5 ,name: 'priyanka', email: 'priyanka@gmail.com' ,phone:'8888888',city:'kolhapur'}])
    return (
        <div>
            {/* {personInfo.map(person =>
                <ul>
                    {
                        <div>
                            <li>{person.name}</li>
                            <li>{person.email}</li>
                            <li>{person.phone}</li>
                            <li>{person.city}</li>
                        </div>
                    }
                </ul>
            )} */}
             <table className="table">
                <thead>
                    <tr>
                    <th>#</th>
                        <th>name</th>
                        <th>email</th>
                        <th>phone</th>
                        <th>city</th>
                    </tr>
                </thead>
                <tbody>

                    {

personInfo.map((person)=>{

                        return(<tr key={person.id}>
                            <td>{person.id}</td>
                            <td>{person.email}</td>
                            <td>{person.phone}</td>
                            <td>{person.city}</td>
                            
                        </tr>)
                     })
                    }
                 

                </tbody>

            </table>
        </div>
    );
}

export default UseStateHooksArray;