import React, { useState } from 'react';

function UseStateHookDemo(props) {
    const [mname, setName] = useState('abhishek')
    function seNameVal() {
        setName('ravi')
    }
    return (
        <div>
            <button onClick={seNameVal}> setName</button>
            {mname}
        </div>
    );
}

export default UseStateHookDemo;