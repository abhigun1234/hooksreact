import React, { useMemo, useState } from 'react';

function UseMemoDemo(props) {
    const[counterOne,setCounterOne]=useState(0)
    const[counterTwo,setCounterTwo]=useState(0)
    const incrementOne=()=>{
        setCounterOne(counterOne+1)
    }
    const incrementTwo=()=>{
        console.log(" incrementTwo called")
        setCounterTwo(counterTwo+1)
    }
    // const isEven=()=>{
    //     console.log(" isEven called")
    //     let i=0;
    //     while(i<300000000){
    //         i++
    //     }
    //     return counterOne %2 ===0
    // }
    const isEven=useMemo(()=>{
        console.log(" isEven called")
        let i=0;
        while(i<300000000){
            i++
        }
        return counterOne %2 ===0
    },[counterOne])
    // //useMemo hooks
    // const isEven=useMemo(()=>{
    //     console.log(" isEven called")
    //     let i=0;
    //     while(i<300000000){
    //         i++
    //     }
    //     return counterOne %2 ===0
    // },[counterOne])
    return (
        <div>
            <div><button onClick={incrementOne}>increment One</button>
            {counterOne}
            {/* <span>{isEven()? 'Even': 'Odd'}</span> */}
            <span>{isEven ? 'Even': 'Odd'}</span>
            </div>
            <div><button onClick={incrementTwo}>increment Two</button>{counterTwo}</div>
        </div>
    );
}

export default UseMemoDemo;