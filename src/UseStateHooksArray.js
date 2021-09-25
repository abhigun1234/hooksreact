import React, { useState } from 'react';

function UseStateHooksArray(props) {
    const [personInfo, setPersonInfo] = useState([
        { name: 'abhi', email: 'abhi@gmail.com',phone:'8888888' }, 
    { name: 'ravi', email: 'ravi@gmail.com' ,phone:'8888888'},{ name: 'ram', email: 'ram@gmail.com' ,phone:'8888888'}])
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