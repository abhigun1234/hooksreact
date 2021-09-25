import React, { useState } from 'react';

function HookCounterexampe2(props) {
    const [personInfo, setPersonInfo] = useState({ name: 'abhi', email: 'abhi@gmail.com' })
    function setName(e) {

        setPersonInfo({...personInfo, name: e.target.value })

    }
    function setEmail(e) {
        setPersonInfo({...personInfo, email: e.target.value })
    }
    return (
        <div>

            <input value={personInfo.name} onChange={setName} placeholder='enter name'></input>
            <input value={personInfo.email} onChange={setEmail} placeholder='enter email'></input>
            <h1>{personInfo.name}</h1>
            <h1>{personInfo.email}</h1>
        </div>
    );
}

export default HookCounterexampe2;