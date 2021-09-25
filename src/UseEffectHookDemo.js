import axios from 'axios';
import React, { useEffect, useState } from 'react';

function UseEffectHookDemo(props) {

    const [courseDetails,setCourse]=useState([])
    useEffect(()=>{

        axios.get()
    })
    return (
        <div>
            
        </div>
    );
}

export default UseEffectHookDemo;